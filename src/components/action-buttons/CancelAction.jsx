import useRequest from "../../features/account/hooks/use-request";
import useWorkInfo from "../../features/workinfo/hooks/use-workinfo";
import Button from "../Button";

function CancelAction({ isFromRequestPage, workId }) {
  const { cancelRequest } = isFromRequestPage ? useRequest() : useWorkInfo();

  return (
    <div>
      <Button bg="warning" onClick={() => cancelRequest(workId)}>
        Cancel
      </Button>
    </div>
  );
}

export default CancelAction;
