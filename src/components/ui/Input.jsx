import { forwardRef } from "react";

import cn from "classnames";

import { constants } from ".";

const Input = forwardRef(
  ({ variant = constants.variants.primary, error = "", ...props }, ref) => {
    const className = cn(
      "w-full focus:ring-0 focus:border-grey active:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
      {
        "rounded-md border border-grey px-4 h-12":
          variant === constants.variants.primary,
        "bg-grey rounded-lg text-black h-10 px-4 placeholder:text-black":
          variant === constants.variants.secondary,
        "border-0 border-b border-light-grey leading-4 px-6 py-2.5":
          variant === constants.variants.outline,
        "!border-error": !!error,
      },
      props.className,
    );

    return (
      <div className="relative">
        <input ref={ref} {...props} className={className} />
        {!!error && (
          <span className="absolute -bottom-4 block w-full pl-5 text-xs text-error">
            {error}
          </span>
        )}
      </div>
    );
  },
);

export { Input };
