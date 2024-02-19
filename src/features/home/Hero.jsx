import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import background from "../../assets/mainhero.jpg";
import Button from "../../components/Button";
import DateInput from "../../components/DateInput";
import { format } from "date-fns";

function Hero() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams({});

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formattedDate = format(data.findDate, "yyyy-MM-dd");

    setSearchParams((prev) => ({ ...prev, searchedDate: formattedDate }));
    navigate(`/work?searchedDate=${formattedDate}`);
    reset();
  };

  return (
    <div
      className="px-28 py-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
          <DateInput
            control={control}
            name="findDate"
            placeholder="Date"
            errors={errors}
          />
          <Button>Submit</Button>
        </form>
      </div>
      {/* Hero Picture */}
      <div></div>
    </div>
  );
}

export default Hero;
