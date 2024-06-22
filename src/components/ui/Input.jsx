import cn from "classnames";

const constants = {
  variants: { primary: "primary" },
};

const Input = ({
  variant = constants.variants.primary,
  error = "",
  ...props
}) => {
  const className = cn("w-full focus:outline-none", props.className, {
    "rounded-md border border-grey px-4 h-12":
      variant === constants.variants.primary,
    "border-error": !!error,
  });

  return (
    <div>
      <input {...props} className={className} />
      {!!error && <span className="text-error block w-full pl-5">{error}</span>}
    </div>
  );
};

export { Input, constants };
