import { Navigate } from "react-router-dom";
import { USER_ROLE } from "../constants";
import useAuth from "../hooks/use-auth";

function ProtectedPhotographer({ children }) {
  const { authUser } = useAuth();

  return authUser?.role === USER_ROLE.Photographer ? (
    children
  ) : (
    <Navigate to="/" />
  );
}

export default ProtectedPhotographer;
