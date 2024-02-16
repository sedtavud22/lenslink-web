import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button";
import useWork from "../../features/work/hooks/use-work";

function DeleteAction({ id, noNavigate }) {
  const { workId } = useParams();
  const navigate = useNavigate();
  const { deleteWork } = useWork();

  const handleClick = async () => {
    try {
      const willSendId = workId || String(id);

      await deleteWork(willSendId);

      if (!noNavigate) {
        navigate("/work");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Button bg="warning" onClick={handleClick}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteAction;
