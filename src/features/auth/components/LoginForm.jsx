import Modal from "../../../components/Modal";
import useAuth from "../../../hooks/use-auth";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import useLoginForm from "../hooks/use-login-form";

function LoginForm() {
  const { triggerChangeAuthForm } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal
      modalId="login_form"
      btnName="Login"
      title="Sign In"
      text="Don't have an account?"
      spanText="Sign Up"
      spanOnClick={triggerChangeAuthForm}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-full">
            <Input
              register={register}
              name="email"
              errors={errors}
              placeholder="Email address"
            />
          </div>
          <div className="col-span-full">
            <Input
              register={register}
              name="password"
              errors={errors}
              placeholder="Password"
            />
          </div>
          <p
            className="col-span-full text-accent hover:underline mb-2 text-sm"
            role="button"
          >
            Forgot Password?
          </p>
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
