import { useState } from "react";
import Loading from "../../../components/Loading";
import BreadcrumbsTab from "../../../layouts/BreadcrumbsTab";
import useProfile from "../hooks/use-profile";
import EditProfileForm from "./EditProfileForm";
import ProfileInfo from "./ProfileInfo";
import Sidebar from "./Sidebar";

function ProfileContainer() {
  const { loading } = useProfile();
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(true);
  };

  const closeEdit = () => {
    setIsEdit(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <BreadcrumbsTab links={{ Home: "" }} currentPage="Account" />
      <div className="max-w-[1440px] mx-auto px-32">
        <h1 className="py-12 text-4xl font-semibold">Account</h1>
        <div className="grid grid-cols-12 gap-16 py-16">
          <Sidebar bgSidebarTab1="bg-darkblueishGray" />
          {isEdit ? (
            <EditProfileForm closeEdit={closeEdit} />
          ) : (
            <ProfileInfo toggleEdit={toggleEdit} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
