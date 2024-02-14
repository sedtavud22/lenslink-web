import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { ArrowRightIcon } from "../icons";

function FooterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-lg font-semibold">Newsletter</h3>
      <p className="text-lightGrayText text-sm">
        Will send you weekly updates on photography news
      </p>

      <form className="flex items-center" onSubmit={handleSubmit(onSubmit)}>
        {/* Enter Email */}
        <Input
          register={register}
          name="newsEmail"
          errors={errors}
          placeholder="Email address"
        />
        {/* Button */}
        <button className="btn btn-circle btn-primary -ml-16" type="submit">
          <div className="">
            <ArrowRightIcon className="w-6 h-6 fill-white" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default FooterForm;
