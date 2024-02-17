import { Navigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";

function ProtectedUser({ children }) {
  const { authUser } = useAuth();

  return authUser ? children : <Navigate to="/" />;
}

export default ProtectedUser;
