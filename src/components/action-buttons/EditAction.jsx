import { Link } from "react-router-dom";
import Button from "../Button";

function EditAction({ workId }) {
  return (
    <Link to={`/edit/${workId}`}>
      <Button bg="accent">Edit</Button>
    </Link>
  );
}

export default EditAction;
