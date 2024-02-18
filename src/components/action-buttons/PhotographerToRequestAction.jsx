import React from "react";
import Button from "../Button";
import useRequest from "../../features/account/hooks/use-request";

function PhotographerToRequestAction({ workId }) {
  const { acceptRequest, rejectRequest } = useRequest();

  return (
    <div className="flex gap-4">
      <Button bg="accent" onClick={() => acceptRequest(workId)}>
        Accept
      </Button>
      <Button bg="warning" onClick={() => rejectRequest(workId)}>
        Reject
      </Button>
    </div>
  );
}

export default PhotographerToRequestAction;
