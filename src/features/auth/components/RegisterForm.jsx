import Modal from "../../../components/Modal";
import useRegisterForm from "../hooks/use-register-form";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import provinces from "../../../constants/province";
import useAuth from "../../../hooks/use-auth";
import { toast } from "react-toastify";

function RegisterForm() {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useRegisterForm();

  const changeForm = (modalId) => {
    document.getElementById(modalId).close();
    document
      .getElementById(modalId === "login_form" ? "register_form" : "login_form")
      .showModal();
    reset();
  };

  const onSubmit = async (user) => {
    try {
      await registerUser(user);
      reset();
      document.getElementById("register_form").close();
      toast.success("Successfully registered");
    } catch (error) {
      if (error?.response.data.message === "EMAIL_IN_USE") {
        setError("email", {
          type: "custom",
          message: "Email is already in use",
        });
        return;
      }
      toast.error(error.response?.data.message);
    }
  };

  return (
    <Modal
      modalId="register_form"
      btnName="Register"
      title="Sign Up"
      text="Already have an account?"
      spanText="Sign In"
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

          {/* FirstName */}
          <div>
            <Input
              register={register}
              name="firstName"
              errors={errors}
              placeholder="First name"
            />
          </div>

          {/* LastName */}
          <div>
            <Input
              register={register}
              name="lastName"
              errors={errors}
              placeholder="Last name"
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

          {/* Confirm Password */}
          <div className="col-span-full">
            <Input
              type="password"
              register={register}
              name="confirmPassword"
              errors={errors}
              placeholder="Confirm Password"
            />
          </div>

          {/* Gender */}
          <div>
            <Select
              register={register}
              name="gender"
              errors={errors}
              options={["Female", "Male", "LGBTQ"]}
            />
          </div>

          {/* Role */}
          <div>
            <Select
              register={register}
              name="role"
              errors={errors}
              options={["Client", "Photographer"]}
            />
          </div>

          {/* Province */}
          <div className="col-span-full">
            <Select
              register={register}
              name="province"
              errors={errors}
              options={provinces}
            />
          </div>

          {/* Submit */}
          <div className="col-span-full">
            <Button type="submit" width="full">
              Register
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default RegisterForm;
