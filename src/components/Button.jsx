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
};

const colorClass = {
  white: "text-white",
};

const widthClass = {
  full: "w-full",
};

function Button({ children, bg, color, width, ...props }) {
  let classes = `
  ${bg ? bgClass[bg].bg + " " : ""} ${color ? colorClass[color] : ""} ${
    width ? widthClass[width] : ""
  }`;
  return (
    <button className={`btn ${classes}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
