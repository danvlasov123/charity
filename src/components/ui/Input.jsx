import cn from "classnames";

import { constants } from ".";

const Input = ({
  variant = constants.variants.primary,
  error = "",
  ...props
}) => {
  const className = cn(
    "w-full focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
    {
      "rounded-md border border-grey px-4 h-12":
        variant === constants.variants.primary,
      "bg-grey rounded-lg text-black h-10 px-4 placeholder:text-black":
        variant === constants.variants.secondary,
      "border-b border-light-grey leading-4 px-6 py-2.5":
        variant === constants.variants.outline,
      "border-error": !!error,
    },
    props.className,
  );

  return (
    <div>
      <input {...props} className={className} />
      {!!error && <span className="block w-full pl-5 text-error">{error}</span>}
    </div>
  );
};

export { Input };
