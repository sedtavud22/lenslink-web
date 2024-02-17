import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as userApi from "../../../api/user";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileUser, setProfileUser] = useState({});
  const [loading, setLoading] = useState(true);

  const { userId } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await userApi.getUserByUserId(userId);
        setProfileUser(res.data.user);
      } catch (error) {
        toast.error(error.response?.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <ProfileContext.Provider value={{ profileUser, loading }}>
      {children}
    </ProfileContext.Provider>
  );
}
