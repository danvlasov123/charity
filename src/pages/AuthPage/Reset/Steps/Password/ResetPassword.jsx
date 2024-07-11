import { Button, Input } from "src/components/ui";

import { Link } from "react-router-dom";

import { PAGES_PATH } from "src/router";

import { useFormik } from "formik";

import { ResetPasswordSchema } from "src/utils/validation-schemas";

import { fetchPostResetFinishPassword } from "src/api/auth/auth";

import { useNavigate } from "react-router-dom";

const ResetPassword = ({ token }) => {
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
        <h1 className="uppercase">Придумайте новый пароль</h1>
        <div className="pt-2.5">
          <Input
            value={values.new_password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.new_password && errors.new_password}
            placeholder="Новый пароль"
            type="password"
            name="new_password"
          />
        </div>
        <div className="pt-7">
          <Input
            placeholder="Повторить снова"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
          />
        </div>
        <div className="flex gap-4 py-2.5">
          {errors.message && (
            <p className="text-sm text-red">{errors.message}</p>
          )}
          {values.message && (
            <p className="text-sm text-green">{values.message}</p>
          )}
          <Link
            to={PAGES_PATH.register.full}
            className="ml-auto block w-fit text-sm"
          >
            Регистрация
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
          {values.message ? "Авторизоваться" : "Reset"}
        </Button>
      </div>
    </form>
  );
};

export { ResetPassword };
