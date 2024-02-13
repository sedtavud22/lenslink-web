const defaultClasses =
  "w-full p-4 border rounded-lg focus:outline-none focus:ring-1";

function Select({ options, register, name, errors, ...props }) {
  const extendedClasses = errors[name]
    ? "border-error focus:ring-error"
    : "border-[#dcdcdc] focus:border-accent focus:ring-accent";

  return (
    <>
      <select
        className={`${defaultClasses} ${extendedClasses}`}
        autoComplete="off"
        defaultValue=""
        {...register(name)}
        {...props}
      >
        {/* Disabled option */}
        <option disabled value="">
          {`${name[0].toUpperCase()}${name.slice(1, name.length)}`}
        </option>

        {/* Options */}
        {options?.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      {/* Error */}
      {errors[name] && (
        <small className="text-error">{errors[name].message}</small>
      )}
    </>
  );
}

export default Select;
