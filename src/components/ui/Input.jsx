import cn from "classnames";

const constants = {
  variants: { primary: "primary" },
};

const Input = ({ variant = constants.variants.primary, ...props }) => {
  const className = cn("w-full focus:outline-none", props.className, {
    "rounded-md border border-grey px-4 h-12":
      variant === constants.variants.primary,
  });

  return (
    <div>
      <input {...props} className={className} />
    </div>
  );
};

export { Input, constants };
