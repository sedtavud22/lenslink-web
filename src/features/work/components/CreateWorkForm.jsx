import Button from "../../../components/Button";
import useCreateWorkForm from "../hooks/use-create-work-form";
import DateInput from "../../../components/DateInput";
import TextArea from "../../../components/TextArea";
import PictureForm from "./PictureForm";
import { useState } from "react";
import { toast } from "react-toastify";
import useWork from "../hooks/use-work";
import Loading from "../../../components/Loading";
import { useNavigate } from "react-router-dom";

function CreateWorkForm() {
  const [cardImage, setCardImage] = useState(null);
  const [subImage1, setsubImage1] = useState(null);
  const [subImage2, setsubImage2] = useState(null);
  const [subImage3, setsubImage3] = useState(null);
  const [errorImage, setErrorImage] = useState({});
  const [loading, setLoading] = useState(false);

  const { createWork } = useWork();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useCreateWorkForm();

  const onSubmit = async (data) => {
    try {
      if (!cardImage) {
        return setErrorImage((prev) => ({
          ...prev,
          cardImage: "Main image is required",
        }));
      }

      const formData = new FormData();
      formData.append("description", data.description);
      formData.append("firstAvailableDate", data.firstAvailableDate);
      formData.append("lastAvailableDate", data.lastAvailableDate);
      formData.append("cardImage", cardImage);

      if (subImage1) {
        formData.append("subImages", subImage1);
      }
      if (subImage2) {
        formData.append("subImages", subImage2);
      }
      if (subImage3) {
        formData.append("subImages", subImage3);
      }
      setLoading(true);

      await createWork(formData);
      reset();
      setCardImage(null);
      setsubImage1(null);
      setsubImage2(null);
      setsubImage3(null);
      toast.success("Successfully create work");
      navigate("/work");
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form
        className="form-control gap-10 w-[50%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Dates */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-center">Available Date</h1>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col">
              <DateInput
                control={control}
                name="firstAvailableDate"
                placeholder="From"
                errors={errors}
              />
            </div>
            <div className="flex flex-col">
              <DateInput
                control={control}
                name="lastAvailableDate"
                placeholder="To"
                errors={errors}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-center">Description</h1>
          <div className="flex flex-col">
            <TextArea
              register={register}
              name="description"
              placeholder="Description"
              errors={errors}
            />
          </div>
        </div>

        {/* Card Picture */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-center">Main Picture</h1>
          <PictureForm
            image={cardImage}
            name="cardImage"
            setImage={setCardImage}
            errorImage={errorImage.cardImage}
            setErrorImage={setErrorImage}
          />
        </div>

        {/* Pictures */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-center">Sub Pictures (Optional)</h1>
          <div className="flex flex-col gap-4">
            <PictureForm
              register={register}
              name="subImage1"
              image={subImage1}
              setImage={setsubImage1}
              errorImage={errorImage.subImage1}
              setErrorImage={setErrorImage}
            />

            <PictureForm
              register={register}
              name="subImage2"
              image={subImage2}
              setImage={setsubImage2}
              errorImage={errorImage.subImage2}
              setErrorImage={setErrorImage}
            />

            <PictureForm
              register={register}
              name="subImage3"
              image={subImage3}
              setImage={setsubImage3}
              errorImage={errorImage.subImage3}
              setErrorImage={setErrorImage}
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default CreateWorkForm;
