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
    bg: "bg-transparent",
  },
};

const colorClass = {
  white: "text-white",
  black: "text-black",
};

const widthClass = {
  full: "w-full",
};

function Button({
  children,
  bg = "primary",
  color = "white",
  width,
  ...props
}) {
  let classes = `
  ${bg ? bgClass[bg].bg + " " : ""} ${color ? colorClass[color] : ""} ${
    width ? widthClass[width] : ""
  }`;
  return (
    <button className={`btn px-6 ${classes}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
