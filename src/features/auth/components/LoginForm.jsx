import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import useLoginForm from "../hooks/use-login-form";
import useAuth from "../../../hooks/use-auth";
import { toast } from "react-toastify";

function LoginForm() {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useLoginForm();

  const changeForm = (modalId) => {
    document.getElementById(modalId).close();
    document
      .getElementById(modalId === "login_form" ? "register_form" : "login_form")
      .showModal();
    reset();
  };

  const onSubmit = async (credentials) => {
    try {
      await login(credentials);
      reset();
      document.getElementById("login_form").close();
      toast.success("Successfully logged in");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <Modal
      modalId="login_form"
      btnName="Login"
      title="Sign In"
      text="Don't have an account?"
      spanText="Sign Up"
      spanOnClick={changeForm}
      resetFormState={reset}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          {/* Email */}
          <div className="col-span-full">
            <Input
              register={register}
              name="email"
              errors={errors}
              placeholder="Email address"
            />
          </div>

          {/* Password */}
          <div className="col-span-full">
            <Input
              type="password"
              register={register}
              name="password"
              errors={errors}
              placeholder="Password"
            />
          </div>

          {/* Forgot Password */}
          <p
            className="col-span-full text-accent hover:underline mb-2 text-sm"
            role="button"
          >
            Forgot Password?
          </p>

          {/* Submit */}
          <div className="col-span-full">
            <Button type="submit" width="full">
              Login
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default LoginForm;
