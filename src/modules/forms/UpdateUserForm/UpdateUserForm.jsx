import { Link } from "react-router-dom";
import { Input, Button, constants } from "src/components/ui";

import { useFormik } from "formik";

import { UpdateUserSchema } from "src/utils/validation-schemas";

import cn from "classnames";

const UpdateUserForm = ({ onSubmit, onCancel }) => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        "user-name": "David",
        "display-name": "Sharov",
      },
      validationSchema: UpdateUserSchema,
      onSubmit: onSubmit,
    });

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="relative">
        <label htmlFor="user-name" className="px-6 text-xs text-grey">
          User name
        </label>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["user-name"]}
          name="user-name"
          id="user-name"
          variant={constants.variants.outline}
          className={cn({
            "!border-error": touched["user-name"] && !!errors["user-name"],
          })}
        />
        {touched["user-name"] && errors["user-name"] && (
          <span className="absolute px-6 pt-1 text-xs text-error">
            {errors["user-name"]}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="display-name" className="px-6 text-xs text-grey">
          Display name
        </label>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["display-name"]}
          name="display-name"
          id="display-name"
          variant={constants.variants.outline}
          className={cn({
            "!border-error":
              touched["display-name"] && !!errors["display-name"],
          })}
        />
        {touched["display-name"] && errors["display-name"] && (
          <span className="absolute px-6 pt-1 text-xs text-error">
            {errors["display-name"]}
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
