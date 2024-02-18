import { useParams } from "react-router-dom";
import Button from "../../../components/Button";
import useAuth from "../../../hooks/use-auth";
import Avatar from "../../../components/Avatar";
import useProfile from "../hooks/use-profile";

function ProfileInfo() {
  const { authUser } = useAuth();
  const { profileUser } = useProfile();
  const { userId } = useParams();

  return (
    <div className="col-span-8">
      {/* Head */}
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Profile</h1>
        {authUser?.id === +userId && <Button>Edit</Button>}
      </div>

      {/* Avatar & Detail */}
      <div className="flex gap-12 pt-4">
        <Avatar size={8} src={authUser?.profileImage} />
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-medium">
            {profileUser.firstName} {profileUser.lastName}
          </h3>
          <p className="text-lightGrayText">{profileUser.role}</p>
          <p>{profileUser.gender}</p>
          <p>{profileUser.province}</p>
        </div>
      </div>

      {/* About Me */}
      <div className="flex flex-col gap-3 pt-16">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p>{profileUser.profileInfo}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
