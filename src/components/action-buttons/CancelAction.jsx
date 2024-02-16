import useWorkInfo from "../../features/workinfo/hooks/use-workinfo";
import Button from "../Button";

function CancelAction() {
  const { cancelRequest } = useWorkInfo();

  return (
    <div>
      <Button bg="warning" onClick={cancelRequest}>
        Cancel
      </Button>
    </div>
  );
}

export default CancelAction;
