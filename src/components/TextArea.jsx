const defaultClasses =
  "w-full p-4 border rounded-lg focus:outline-none focus:ring-1";

function TextArea({ register, name, errors, ...props }) {
  const extendedClasses = errors[name]
    ? "border-error focus:ring-error"
    : "border-[#dcdcdc] focus:border-accent focus:ring-accent";

  return (
    <>
      <textarea
        className={`${defaultClasses} ${extendedClasses} resize-none`}
        rows="5"
        {...register?.(name)}
        {...props}
      />
      {errors?.[name] && (
        <small className="text-error">{errors?.[name].message}</small>
      )}
    </>
  );
}

export default TextArea;
