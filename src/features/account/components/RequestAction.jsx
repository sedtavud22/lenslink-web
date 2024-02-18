import Button from "../../../components/Button";
import CancelAction from "../../../components/action-buttons/CancelAction";
import CompleteAction from "../../../components/action-buttons/CompleteAction";
import PhotographerToRequestAction from "../../../components/action-buttons/PhotographerToRequestAction";
import { REQUEST_STATUS, USER_ROLE } from "../../../constants";
import useAuth from "../../../hooks/use-auth";

function RequestAction({ request }) {
  const { authUser } = useAuth();

  // accept reject cancel complete review

  if (authUser?.role === USER_ROLE.Client) {
    if (request.status === REQUEST_STATUS.Pending) {
      return <CancelAction isFromRequestPage={true} workId={request.work.id} />;
    }

    if (request.status === REQUEST_STATUS.Ongoing) {
      return <CompleteAction workId={request.work.id} />;
    }

    if (request.status === REQUEST_STATUS.Completed) {
      return (
        <div>
          <Button>Review</Button>
        </div>
      );
    }
  }

  if (
    authUser?.role === USER_ROLE.Photographer &&
    request.status === REQUEST_STATUS.Pending
  ) {
    return <PhotographerToRequestAction workId={request.work.id} />;
  }

  return null;
}

export default RequestAction;
