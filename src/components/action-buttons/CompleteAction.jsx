import React from "react";
import Button from "../Button";
import useRequest from "../../features/account/hooks/use-request";

function CompleteAction({ workId }) {
  const { completeRequest } = useRequest();

  return (
    <div>
      <Button bg="accent" onClick={() => completeRequest(workId)}>
        This request is completed
      </Button>
    </div>
  );
}

export default CompleteAction;
