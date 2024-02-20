import { Navigate } from "react-router-dom";
import useWork from "../features/work/hooks/use-work";
import useAuth from "../hooks/use-auth";

function ProtectedEditOwnWork({ children }) {
  const { authUser } = useAuth();
  const { works } = useWork();

  const isOwnWork = works?.find((work) => authUser?.id === work.photographerId);
  return isOwnWork ? children : <Navigate to="/" />;
}

export default ProtectedEditOwnWork;
