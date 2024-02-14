import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";

function HomePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="px-28 py-20">
        <div className="flex">
          {/* Hero Content */}
          <div className="flex flex-col max-w-[70%] gap-8 justify-between">
            {/* Text */}
            <div>
              <h1 className="text-6xl font-bold leading-[150%] bg-base">
                Find your perfect photographer, now
              </h1>
            </div>
            {/* Form */}
            <form
              className="flex items-center gap-10 max-w-[55%] bg-secondary px-6 py-4 rounded-lg"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                type="date"
                register={register}
                name="workDate"
                placeholder="Date"
                errors={errors}
              />
              <Button>Submit</Button>
            </form>
          </div>
          {/* Hero Picture */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
