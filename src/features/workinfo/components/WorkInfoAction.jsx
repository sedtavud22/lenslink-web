import CancelAction from "../../../components/action-buttons/CancelAction";
import CompleteAction from "../../../components/action-buttons/CompleteAction";
import DeleteAction from "../../../components/action-buttons/DeleteAction";
import EditAction from "../../../components/action-buttons/EditAction";
import SendRequestAction from "../../../components/action-buttons/SendRequestAction";
import { REQUEST_STATUS, USER_ROLE } from "../../../constants";
import useAuth from "../../../hooks/use-auth";
import useWorkInfo from "../hooks/use-workinfo";

function WorkInfoAction() {
  const { authUser } = useAuth();
  const { workInfo } = useWorkInfo();

  if (
    authUser?.role === USER_ROLE.Photographer &&
    authUser?.id === workInfo.photographerId
  ) {
    return (
      <div className="flex gap-4">
        <EditAction />
        <DeleteAction />
      </div>
    );
  }

  if (authUser?.role === USER_ROLE.Photographer) {
    return null;
  }

  if (authUser?.role === USER_ROLE.Client) {
    for (let request of workInfo?.workRequests) {
      if (
        authUser?.id === request.clientId &&
        request.status === REQUEST_STATUS.Pending
      ) {
        return <CancelAction workId={workInfo.id} />;
      }
      if (
        authUser?.id === request.clientId &&
        request.status === REQUEST_STATUS.Ongoing
      ) {
        return <CompleteAction />;
      }
    }
  }

  return <SendRequestAction />;
}

export default WorkInfoAction;
