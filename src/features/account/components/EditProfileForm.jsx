import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import useProfile from "../hooks/use-profile";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import editProfileSchema from "../schemas/edit-profile-schema";
import Select from "../../../components/Select";
import provinces from "../../../constants/province";
import TextArea from "../../../components/TextArea";
import { CloseIcon, ImagePlusIcon } from "../../../icons";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";

function EditProfileForm({ closeEdit }) {
  const { authUser, updateUser } = useAuth();
  const { profileUser } = useProfile();
  const { userId } = useParams();

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileEl = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(editProfileSchema),
    defaultValues: {
      firstName: profileUser?.firstName,
      lastName: profileUser?.lastName,
      gender: profileUser?.gender,
      province: profileUser?.province,
      role: profileUser?.role,
      profileInfo: profileUser?.profileInfo,
    },
  });

  const cancelImage = (e) => {
    e.stopPropagation();
    setImage(null);
    fileEl.current.value = "";
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      if (image) {
        formData.append("profileImage", image);
      }

      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("gender", data.gender);
      formData.append("province", data.province);
      formData.append("role", data.role);

      if (data.profileInfo) {
        formData.append("profileInfo", data.profileInfo);
      }
      setLoading(true);
      await updateUser(formData);
      reset();
      setImage(null);
      toast.success("Successfully updated your profile");
      closeEdit();
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <input
        type="file"
        className="hidden"
        ref={fileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
            fileEl.current.value = "";
          }
        }}
      />
      <form className="col-span-8" onSubmit={handleSubmit(onSubmit)}>
        {/* Head */}
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">Profile</h1>
        </div>

        {/* Avatar & Detail */}
        <div className="flex gap-12 pt-4">
          <div
            className="relative"
            role="button"
            onClick={() => fileEl.current.click()}
          >
            <Avatar
              size={8}
              src={
                image ? URL.createObjectURL(image) : profileUser?.profileImage
              }
            />
            <div className="absolute right-0 top-[38%] bg-secondary rounded-full p-1">
              <ImagePlusIcon className="w-6 h-6" />
            </div>
            {image && (
              <button
                className="absolute -right-2 -top-1 bg-warning rounded-full p-2"
                onClick={cancelImage}
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-6">
              <div>
                <label>First Name :</label>
                <div className="flex flex-col">
                  <Input
                    register={register}
                    name="firstName"
                    errors={errors}
                    placeholder="First name"
                  />
                </div>
              </div>
              <div>
                <label>Last Name :</label>
                <div className="flex flex-col">
                  <Input
                    register={register}
                    name="lastName"
                    errors={errors}
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>

            <div>
              <label>Gender :</label>
              <div className="flex flex-col">
                <Select
                  register={register}
                  name="gender"
                  errors={errors}
                  options={["Female", "Male", "LGBTQ"]}
                />
              </div>
            </div>
            <div>
              <label>Province :</label>
              <div className="flex flex-col">
                <Select
                  register={register}
                  name="province"
                  errors={errors}
                  options={provinces}
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="flex flex-col gap-3 pt-16">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <div className="flex flex-col">
            <TextArea
              register={register}
              name="profileInfo"
              placeholder="Profile Description"
              errors={errors}
            />
          </div>
        </div>

        {authUser?.id === +userId && (
          <div className="flex gap-4 mt-6">
            <Button type="submit">Save</Button>
            <Button onClick={closeEdit} bg="warning">
              Cancel
            </Button>
          </div>
        )}
      </form>
    </>
  );
}

export default EditProfileForm;
