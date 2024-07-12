import { Link } from "react-router-dom";
import { Input, Button, constants } from "src/components/ui";

import { useFormik } from "formik";

import { UpdatePasswordSchema } from "src/utils/validation-schemas";

import cn from "classnames";
import { useTranslation } from "react-i18next";

const UpdatePasswordForm = ({ onSubmit, onCancel }) => {
  const { t } = useTranslation();
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        "current-password": "",
        "new-password": "",
        "confirm-password": "",
      },
      validationSchema: UpdatePasswordSchema,
      onSubmit: onSubmit,
    });

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="relative">
        <label htmlFor="current-password" className="px-6 text-xs text-grey">
          {t("Current Password")}
        </label>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["current-password"]}
          name="current-password"
          id="current-password"
          type="password"
          variant={constants.variants.outline}
          className={cn({
            "!border-error":
              touched["current-password"] && !!errors["current-password"],
          })}
        />
        {touched["current-password"] && errors["current-password"] && (
          <span className="absolute px-6 pt-1 text-xs text-error">
            {t(errors["current-password"])}
          </span>
        )}
      </div>
      <div>
        <Link to={"/"} className="px-6 text-xs text-blue">
          {t("Forgot password?")}
        </Link>
        <label
          htmlFor="new-password"
          className="block px-6 pt-2 text-xs text-grey"
        >
          {t("New Password")}
        </label>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["new-password"]}
          name="new-password"
          id="new-password"
          type="password"
          variant={constants.variants.outline}
          className={cn({
            "!border-error":
              touched["new-password"] && !!errors["new-password"],
          })}
        />
        {touched["new-password"] && errors["new-password"] && (
          <span className="absolute px-6 pt-1 text-xs text-error">
            {t(errors["new-password"])}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="confirm-password" className="px-6 text-xs text-grey">
          {t("Confirm Password")}
        </label>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["confirm-password"]}
          name="confirm-password"
          id="confirm-password"
          type="password"
          variant={constants.variants.outline}
          className={cn({
            "!border-error":
              touched["confirm-password"] && !!errors["confirm-password"],
          })}
        />
        {touched["confirm-password"] && errors["confirm-password"] && (
          <span className="absolute px-6 pt-1 text-xs text-error">
            {t(errors["confirm-password"])}
          </span>
        )}
      </div>
      <div className="flex justify-center gap-6 px-6">
        <Button
          variant={constants.variants.outline}
          type="submit"
          className="uppercase"
        >
          {t("Save")}
        </Button>
        <Button
          variant={constants.variants.outline}
          onClick={onCancel}
          className="uppercase"
        >
          {t("Cancel")}
        </Button>
      </div>
    </form>
  );
};

export { UpdatePasswordForm };
