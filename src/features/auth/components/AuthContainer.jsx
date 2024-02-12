import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Button from "../../../components/Button";

function AuthContainer() {
  return (
    <div>
      <Button onClick={() => document.getElementById("login_form").showModal()}>
        Login
      </Button>
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default AuthContainer;
