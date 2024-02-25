import { toast } from "react-toastify";
import Button from "../../../components/Button";
import DateInput from "../../../components/DateInput";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import TextArea from "../../../components/TextArea";
import useRequestForm from "../hooks/use-request-form";
import useWorkInfo from "../hooks/use-workinfo";
import { useNavigate } from "react-router-dom";
import { REQUEST_STATUS } from "../../../constants";

function SendRequestForm() {
  const { workInfo, sendRequest } = useWorkInfo();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useRequestForm();

  const excludedDates = workInfo.workRequests
    .filter(
      (request) =>
        request.status === REQUEST_STATUS.Ongoing ||
        request.status === REQUEST_STATUS.Completed
    )
    .map((request) => request.date);

  const onSubmit = async (data) => {
    try {
      if (!data.clientSocialMedia) {
        delete data.clientSocialMedia;
      }
      if (!data.description) {
        delete data.description;
      }
      await sendRequest(data);
      reset();
      document.getElementById("request_form").close();
      toast.success("Successfully sent request");
      navigate("/work");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <Modal
      modalId="request_form"
      title="Book an appointment"
      text="Please provide description and forms of contact"
      resetFormState={reset}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          {/* Mobile */}
          <div className="col-span-full">
            <Input
              register={register}
              name="clientMobile"
              errors={errors}
              placeholder="Mobile Number"
            />
          </div>

          {/* Social */}
          <div className="col-span-full">
            <Input
              register={register}
              name="clientSocialMedia"
              errors={errors}
              placeholder="Social Media"
            />
          </div>

          <div className="col-span-full">
            <div className="flex flex-col">
              <DateInput
                control={control}
                name="date"
                placeholder="Select Date"
                minDate={workInfo?.firstAvailableDate}
                maxDate={workInfo?.lastAvailableDate}
                excludeDatesArray={excludedDates}
                errors={errors}
              />
            </div>
          </div>

          <div className="col-span-full">
            <TextArea
              register={register}
              name="description"
              placeholder="Description"
              errors={errors}
            />
          </div>

          {/* Submit */}
          <div className="col-span-full">
            <Button type="submit" width="full">
              Send Request
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default SendRequestForm;
