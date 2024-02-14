const bgClass = {
  primary: {
    bg: "btn-primary",
  },
  secondary: {
    bg: "btn-secondary",
  },
  accent: {
    bg: "btn-accent",
  },
  transparent: {
    bg: "btn-neutral bg-transparent",
  },
  warning: {
    bg: "btn-warning",
  },
};

const colorClass = {
  white: "text-white",
  black: "text-black",
};

const widthClass = {
  full: "w-full",
  35: "w-[35%]",
};

function Button({
  children,
  bg = "primary",
  color = "white",
  width,
  px = "px-8",
  ...props
}) {
  let classes = `
  ${bg ? bgClass[bg].bg + " " : ""} ${color ? colorClass[color] : ""} ${
    width ? widthClass[width] : ""
  } ${px}`;
  return (
    <button className={`btn ${classes}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
