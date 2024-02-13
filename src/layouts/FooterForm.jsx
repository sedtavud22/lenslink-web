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

      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
        {/* Enter Email */}
        <Input
          register={register}
          name="newsEmail"
          errors={errors}
          placeholder="Email address"
        />
        {/* Button */}
        <button className="w-9 h-9 rounded-full bg-primary absolute right-0 top-1/2 -translate-x-2/4 -translate-y-2/4 transform-gpu">
          <div className="absolute left-1/2 -translate-x-2/4 -translate-y-2/4 transform-gpu">
            <ArrowRightIcon className="w-5 h-5 fill-white" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default FooterForm;
