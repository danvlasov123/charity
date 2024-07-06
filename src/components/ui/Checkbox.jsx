import cn from "classnames";

const Checkbox = ({ label, name, id, error, ...props }) => {
  const classNameLabel = cn("text-xs leading-4", {
    "text-error": error,
  });
  return (
    <div className="flex gap-2.5">
      <input
        id={id}
        type="checkbox"
        className="bg-gray border-gray h-4 w-4 rounded text-grey focus:ring-2 focus:ring-grey"
        {...props}
      />
      {label && (
        <label htmlFor={id} className={classNameLabel}>
          {label}
        </label>
      )}
    </div>
  );
};

export { Checkbox };
