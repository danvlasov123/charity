import { Button, Input } from "src/components/ui";

import { Link } from "react-router-dom";

import { PAGES_PATH } from "src/router";

import { useFormik } from "formik";

import { ResetPasswordSchema } from "src/utils/validation-schemas";

import { fetchPostResetFinishPassword } from "src/api/auth/auth";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ResetPassword = ({ token }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    isSubmitting,
    setFieldError,
    setFieldValue,
  } = useFormik({
    initialValues: {
      new_password: "",
      password: "",
      message: "",
    },
    validationSchema: ResetPasswordSchema.password,
    onSubmit: async ({ password, message }) => {
      const data = {
        token,
        password,
      };
      const response = await fetchPostResetFinishPassword(data);

      if (response.success) {
        setFieldValue("message", "Password successfully reset");
      }

      if (!response.success) {
        setFieldError("message", response.error);
      }
    },
  });
  return (
    <form
      className="flex h-full flex-col justify-between"
      onSubmit={handleSubmit}
    >
      <div>
        <h1 className="uppercase">{t("create_new_pass")}</h1>
        <div className="pt-2.5">
          <Input
            value={values.new_password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.new_password && t(errors.new_password)}
            placeholder={t("new_pass")}
            type="password"
            name="new_password"
          />
        </div>
        <div className="pt-7">
          <Input
            placeholder={t("repeat_pass")}
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && t(errors.password)}
          />
        </div>
        <div className="flex gap-4 py-2.5">
          {errors.message && (
            <p className="text-sm text-red">{t(errors.message)}</p>
          )}
          {values.message && (
            <p className="text-sm text-green">{t(values.message)}</p>
          )}
          <Link
            to={PAGES_PATH.register.full}
            className="ml-auto block w-fit text-sm"
          >
            {t("registration")}
          </Link>
        </div>
      </div>
      <div>
        <Button
          type="submit"
          className="uppercase"
          disabled={isSubmitting || errors.message}
          onClick={() => values.message && navigate(PAGES_PATH.login.full)}
        >
          {values.message ? t("login") : t("reset")}
        </Button>
      </div>
    </form>
  );
};

export { ResetPassword };
