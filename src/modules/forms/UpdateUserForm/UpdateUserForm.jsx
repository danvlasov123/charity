import { Input, Button, constants } from "src/components/ui";

import cn from "classnames";
import { useTranslation } from "react-i18next";

const UpdateUserForm = ({ formik, onCancel }) => {
  const { t } = useTranslation();
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    formik;

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="relative">
        <label htmlFor="firstName" className="px-6 text-xs text-grey">
          {t("First name")}
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
            {t(errors["firstName"])}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="lastName" className="px-6 text-xs text-grey">
          {t("Last name")}
        </label>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["lastName"]}
          name="lastName"
          id="lastName"
          variant={constants.variants.outline}
          className={cn({
            "!border-error": touched["lastName"] && !!errors["lastName"],
          })}
        />
        {touched["lastName"] && errors["lastName"] && (
          <span className="absolute px-6 pt-1 text-xs text-error">
            {t(errors["lastName"])}
          </span>
        )}
      </div>
      <div className="flex justify-center gap-6 px-6">
        <Button
          variant={constants.variants.outline}
          className="uppercase"
          type="submit"
        >
          {t("Save")}
        </Button>
        <Button
          variant={constants.variants.outline}
          className="uppercase"
          onClick={onCancel}
        >
          {t("Cancel")}
        </Button>
      </div>
    </form>
  );
};

export { UpdateUserForm };
