import { Button, Input } from "src/components/ui";

import { useFormik } from "formik";
import { ResetPasswordSchema } from "src/utils/validation-schemas";

import { fetchPostResetPassword } from "src/api/auth/auth";

const ResetEmail = ({ initialValues = { email: "", message: "" } }) => {
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
    initialValues,
    validationSchema: ResetPasswordSchema.email,
    onSubmit: async (values) => {
      setFieldError("message", null);
      setFieldValue("message", null);
      const response = await fetchPostResetPassword(values);

      if (response.success) {
        setFieldValue("message", true);
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
        <h1 className="uppercase">Восстановить доступ</h1>
        <p className="pt-8 text-xs">
          Если у вас есть учетная запись, вы получите ссылку для сброса пароля
          на это письмо.
        </p>
        <div className="pt-5">
          <Input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            name="email"
            placeholder="Электронная почта"
          />
        </div>
        {errors.message && (
          <p className="py-4 text-sm text-red">{errors.message}</p>
        )}
      </div>
      <div>
        <Button
          className={values.message ? "block !bg-green" : "uppercase"}
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting || values.message}
        >
          {values.message ? (
            <img src="/icons/check.svg" className="mx-auto" width={20} alt="success" />
          ) : (
            "Отправить код"
          )}
        </Button>
      </div>
    </form>
  );
};

export { ResetEmail };
