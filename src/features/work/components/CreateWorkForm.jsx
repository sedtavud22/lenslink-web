import Button from "../../../components/Button";
import useCreateWorkForm from "../hooks/use-create-work-form";
import DateInput from "../../../components/DateInput";
import TextArea from "../../../components/TextArea";
import PictureForm from "./PictureForm";
import { useState } from "react";

function CreateWorkForm() {
  const [cardImage, setCardImage] = useState(null);
  const [subImage1, setsubImage1] = useState(null);
  const [subImage2, setsubImage2] = useState(null);
  const [subImage3, setsubImage3] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    control,
    formState: { errors },
  } = useCreateWorkForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(cardImage);
    console.log(subImage1);
    console.log(subImage2);
    console.log(subImage3);
    reset();
    const formData = new FormData();
  };

  return (
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
          register={register}
          name="cardImage"
          image={cardImage}
          setImage={setCardImage}
        />
      </div>

      {/* Pictures */}
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-center">Sub Pictures</h1>
        <div className="flex justify-between">
          <PictureForm
            register={register}
            name="subImage1"
            image={subImage1}
            setImage={setsubImage1}
          />

          <PictureForm
            register={register}
            name="subImage2"
            image={subImage2}
            setImage={setsubImage2}
          />

          <PictureForm
            register={register}
            name="subImage3"
            image={subImage3}
            setImage={setsubImage3}
          />
        </div>
      </div>
      {/* <input type="file" {...register("picture")} /> */}

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default CreateWorkForm;
