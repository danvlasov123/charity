import { Input, Button, constants } from "src/components/ui";

import cn from "classnames";

const UpdateUserForm = ({ formik, onCancel }) => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    formik;

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="relative">
        <label htmlFor="firstName" className="px-6 text-xs text-grey">
          First name
        </label>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["firstName"]}
          name="firstName"
          id="firstName"
          variant={constants.variants.outline}
          className={cn({
            "!border-error": touched["firstName"] && !!errors["firstName"],
          })}
        />
        {touched["firstName"] && errors["firstName"] && (
          <span className="absolute px-6 pt-1 text-xs text-error">
            {errors["firstName"]}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="lastName" className="px-6 text-xs text-grey">
          Last name
        </label>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["lastName"]}
          name="lastName"
          id="lastName"
          variant={constants.variants.outline}
          className={cn({
            "!border-error":
              touched["lastName"] && !!errors["lastName"],
          })}
        />
        {touched["lastName"] && errors["lastName"] && (
          <span className="absolute px-6 pt-1 text-xs text-error">
            {errors["lastName"]}
          </span>
        )}
      </div>
      <div className="flex justify-center gap-6 px-6">
        <Button
          variant={constants.variants.outline}
          className="uppercase"
          type="submit"
        >
          Save shanges
        </Button>
        <Button
          variant={constants.variants.outline}
          className="uppercase"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export { UpdateUserForm };
