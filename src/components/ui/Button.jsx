import cn from "classnames";

import { constants } from ".";

const Button = ({
  variant = constants.variants.primary,
  children,
  className,
  loading,
  disabled,
  ...rest
}) => {
  const btnClassName = cn(
    "h-14 rounded-2xl px-6 tracking-tight w-full",
    {
      "bg-red text-white": variant === constants.variants.primary,
      "bg-white text-grey": variant === constants.variants.secondary,
    },
    {
      "bg-grey pointer-events-none": loading || disabled,
    },
    className,
  );
  return (
    <button {...rest} className={btnClassName}>
      {children}
    </button>
  );
};

export { Button };
