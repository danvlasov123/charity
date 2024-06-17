import cn from "classnames";

const variants = {
  primary: "primary",
  secondary: "secondary",
};

const Button = ({
  variant = variants.primary,
  children,
  className,
  ...rest
}) => {
  const btnClassName = cn(
    className,
    "h-14 rounded-2xl px-6 tracking-tight w-full",
    {
      "bg-red text-white uppercase": variant === variants.primary,
    },
  );
  return (
    <button {...rest} className={btnClassName}>
      {children}
    </button>
  );
};

export { Button, variants };
