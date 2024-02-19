import { Navigate } from "react-router-dom";
import useRequest from "../features/account/hooks/use-request";
import useAuth from "../hooks/use-auth";

function ProtectedRequestInfo({ children }) {
  const { authUser } = useAuth();
  const { requestInfo } = useRequest();

  if (Object.keys(requestInfo).length > 0) {
    return authUser &&
      (authUser?.id === requestInfo.clientId ||
        authUser?.id === requestInfo.work?.photographerId) ? (
      children
    ) : (
      <Navigate to="/" />
    );
  }
}

export default ProtectedRequestInfo;
