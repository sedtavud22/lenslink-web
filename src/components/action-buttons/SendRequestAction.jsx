import SendRequestForm from "../../features/workinfo/components/SendRequestForm";
import useAuth from "../../hooks/use-auth";
import Button from "../Button";

function SendRequestAction() {
  const { authUser } = useAuth();

  const handleClickSendRequest = () => {
    if (!authUser) {
      return document.getElementById("login_form").showModal();
    }
    document.getElementById("request_form").showModal();
  };

  return (
    <div>
      <Button onClick={handleClickSendRequest}>Send Request</Button>
      <SendRequestForm />
    </div>
  );
}

export default SendRequestAction;
