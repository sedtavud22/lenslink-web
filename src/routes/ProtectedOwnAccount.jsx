import { Navigate, useParams } from "react-router-dom";
import useAuth from "../hooks/use-auth";

function ProtectedOwnAccount({ children }) {
  const { authUser } = useAuth();
  const { userId } = useParams();

  return authUser?.id === +userId ? children : <Navigate to="/" />;
}

export default ProtectedOwnAccount;
