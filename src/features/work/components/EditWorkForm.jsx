import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import DateInput from "../../../components/DateInput";
import TextArea from "../../../components/TextArea";
import useWorkInfo from "../../workinfo/hooks/use-workinfo";
import PictureForm from "./PictureForm";
import { joiResolver } from "@hookform/resolvers/joi";
import workSchema from "../schemas/work-schema";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import SubImageForm from "./SubImageForm";
import AddSubImageForm from "./AddSubImageForm";
import OldSubImageForm from "./OldSubImageForm";
import { toast } from "react-toastify";
import useWork from "../hooks/use-work";

function EditWorkForm() {
  const { updateWork } = useWork();
  const { workInfo, loading } = useWorkInfo();
  const [cardImage, setCardImage] = useState(null);
  const [oldSubImages, setOldSubImages] = useState([]);
  const [deletedOldSubImagesId, setDeletedOldSubImagesId] = useState([]);
  const [newSubImages, setNewSubImages] = useState([]);
  const [errorImage, setErrorImage] = useState({});
  const [sendFormLoading, setSendFormLoading] = useState(false);

  const { workId } = useParams();

  const navigate = useNavigate();

  const defaultValues = {
    description: workInfo.description,
    firstAvailableDate: workInfo.firstAvailableDate,
    lastAvailableDate: workInfo.lastAvailableDate,
  };

  useEffect(() => {
    reset(defaultValues);
    setOldSubImages(workInfo?.workImages);
  }, [workInfo]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(workSchema),
    defaultValues: defaultValues,
  });

  const onAddSubImage = (subImage) => {
    setNewSubImages((prev) => [...prev, subImage]);
  };

  const onUpdateSubImage = (subImage, index) => {
    setNewSubImages((prev) => {
      const nextState = [...prev];
      nextState[index] = subImage;
      return nextState;
    });
  };

  const onChangeOldSubImage = (subImage, id) => {
    setOldSubImages((prev) => prev.filter((el) => el.id !== id));
    setDeletedOldSubImagesId((prev) => [...prev, id]);
    setNewSubImages((prev) => [subImage, ...prev]);
  };

  const onDeleteOldSubImage = (id) => {
    setOldSubImages((prev) => prev.filter((el) => el.id !== id));
    setDeletedOldSubImagesId((prev) => [...prev, id]);
  };

  const onDeleteSubImage = (index) => {
    setNewSubImages((prev) => prev.filter((el, i) => i !== index));
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("description", data.description);
      formData.append("firstAvailableDate", data.firstAvailableDate);
      formData.append("lastAvailableDate", data.lastAvailableDate);

      if (cardImage) {
        formData.append("cardImage", cardImage);
      }

      if (newSubImages.length > 0) {
        newSubImages.forEach((subImage) =>
          formData.append("subImages", subImage)
        );
      }

      if (deletedOldSubImagesId.length > 0) {
        deletedOldSubImagesId.forEach((id) =>
          formData.append("deletedOldSubImagesId", id)
        );
      }

      setSendFormLoading(true);

      await updateWork(formData, workId);
      reset();
      setCardImage(null);
      setDeletedOldSubImagesId([]);
      setNewSubImages([]);
      toast.success("Successfully updated work");
      navigate("/work");
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setSendFormLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {sendFormLoading && <Loading />}
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
            initialSrc={workInfo?.cardImageUrl}
          />
        </div>

        {/* Pictures */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-center">Sub Pictures (Optional)</h1>

          <div className="flex flex-col gap-4">
            {oldSubImages?.map((subImage) => (
              <OldSubImageForm
                key={subImage.id}
                subImage={subImage}
                onChangeOldSubImage={onChangeOldSubImage}
                onDeleteOldSubImage={onDeleteOldSubImage}
              />
            ))}

            {newSubImages.map((subImage, index) => (
              <SubImageForm
                subImage={subImage}
                key={index}
                onUpdateSubImage={onUpdateSubImage}
                onDeleteSubImage={onDeleteSubImage}
                index={index}
              />
            ))}
            {oldSubImages?.length + newSubImages.length < 3 && (
              <AddSubImageForm onAddSubImage={onAddSubImage} />
            )}
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default EditWorkForm;
