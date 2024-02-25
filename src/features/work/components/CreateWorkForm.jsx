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
import SubImageForm from "./SubImageForm";
import AddSubImageForm from "./AddSubImageForm";

function CreateWorkForm() {
  const [cardImage, setCardImage] = useState(null);
  const [subImages, setSubImages] = useState([]);
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

  const onAddSubImage = (subImage) => {
    setSubImages((prev) => [...prev, subImage]);
  };

  const onUpdateSubImage = (subImage, index) => {
    setSubImages((prev) => {
      const nextState = [...prev];
      nextState[index] = subImage;
      return nextState;
    });
  };

  const onDeleteSubImage = (index) => {
    setSubImages((prev) => prev.filter((el, i) => i !== index));
  };

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

      if (subImages.length > 0) {
        subImages.forEach((subImage) => formData.append("subImages", subImage));
      }

      setLoading(true);

      await createWork(formData);
      reset();
      setCardImage(null);
      setSubImages([]);
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
            {subImages.map((subImage, index) => (
              <SubImageForm
                subImage={subImage}
                key={index}
                onUpdateSubImage={onUpdateSubImage}
                onDeleteSubImage={onDeleteSubImage}
                index={index}
              />
            ))}
            {subImages.length < 3 && (
              <AddSubImageForm onAddSubImage={onAddSubImage} />
            )}
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default CreateWorkForm;
