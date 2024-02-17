import BreadcrumbsTab from "../../../layouts/BreadcrumbsTab";
import ProfileInfo from "./ProfileInfo";
import Sidebar from "./Sidebar";

function ProfileContainer() {
  return (
    <div>
      <BreadcrumbsTab links={{ Home: "" }} currentPage="Account" />
      <div className="max-w-[1440px] mx-auto px-32">
        <h1 className="py-12 text-4xl font-semibold">Account</h1>
        <div className="grid grid-cols-12 gap-16 py-16">
          <Sidebar bgSidebarTab1="bg-darkblueishGray" />
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
