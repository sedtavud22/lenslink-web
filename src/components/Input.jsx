const defaultClasses =
  "w-full p-4 border rounded-lg focus:outline-none focus:ring-1";

function Input({ type = "text", register, name, errors, ...props }) {
  const extendedClasses = errors?.[name]
    ? "border-error focus:ring-error"
    : "border-[#dcdcdc] focus:border-accent focus:ring-accent";

  return (
    <>
      <input
        type={type}
        className={`${defaultClasses} ${extendedClasses}`}
        autoComplete="off"
        {...register?.(name)}
        {...props}
      />
      {errors?.[name] && (
        <small className="text-error">{errors?.[name].message}</small>
      )}
    </>
  );
}

export default Input;
