import ReactDatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { Controller } from "react-hook-form";

const defaultClasses =
  "w-full p-4 border rounded-lg focus:outline-none focus:ring-1";

function DateInput({ control, name, placeholder, errors, excludeDatesArray }) {
  const extendedClasses = errors[name]
    ? "border-error focus:ring-error"
    : "border-[#dcdcdc] focus:border-accent focus:ring-accent";

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <ReactDatePicker
            className={`${defaultClasses} ${extendedClasses}`}
            placeholderText={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            minDate={addDays(new Date(), 1)}
            excludeDates={excludeDatesArray}
          />
        )}
      />
      {errors?.[name] && (
        <small className="text-error">{errors?.[name].message}</small>
      )}
    </>
  );
}

export default DateInput;
