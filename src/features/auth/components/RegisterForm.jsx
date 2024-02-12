import Modal from "../../../components/Modal";
import useAuth from "../../../hooks/use-auth";
import useRegisterForm from "../hooks/use-register-form";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import provinces from "../../../constants/province";

function RegisterForm() {
  const { triggerChangeAuthForm } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal
      modalId="register_form"
      btnName="Register"
      title="Sign Up"
      text="Already have an account?"
      spanText="Sign In"
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
          <div>
            <Input
              register={register}
              name="firstName"
              errors={errors}
              placeholder="First name"
            />
          </div>
          <div>
            <Input
              register={register}
              name="lastName"
              errors={errors}
              placeholder="Last name"
            />
          </div>
          <div className="col-span-full">
            <Input
              type="password"
              register={register}
              name="password"
              errors={errors}
              placeholder="Password"
            />
          </div>
          <div className="col-span-full">
            <Input
              type="password"
              register={register}
              name="confirmPassword"
              errors={errors}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <Select
              register={register}
              name="gender"
              errors={errors}
              options={["Female", "Male", "LGBTQ+"]}
            />
          </div>
          <div>
            <Select
              register={register}
              name="role"
              errors={errors}
              options={["Client", "Photographer"]}
            />
          </div>
          <div className="col-span-full">
            <Select
              register={register}
              name="province"
              errors={errors}
              options={provinces}
            />
          </div>
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

export default RegisterForm;
