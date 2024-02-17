import ProfileContainer from "../features/account/components/ProfileContainer";
import ProfileContextProvider from "../features/account/contexts/ProfileContext";

function ProfilePage() {
  return (
    <ProfileContextProvider>
      <ProfileContainer />
    </ProfileContextProvider>
  );
}

export default ProfilePage;
