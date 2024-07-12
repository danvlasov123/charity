import React from "react";
import { Input } from "src/components/ui";
import { useTranslation } from "react-i18next";

const LoginForm = ({ formik }) => {
  const { t } = useTranslation();
  const { handleChange, values, errors, handleBlur, touched } = formik;

  return (
    <form>
      <p className="text-sm">{t("login")}</p>
      <div>
        <Input
          className="mt-2.5"
          type="email"
          placeholder={t("email")}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={touched.email && t(errors.email)}
        />
      </div>
      <div className="pt-7">
        <Input
          name="password"
          type="password"
          placeholder={t("password")}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={touched.password && t(errors.password)}
        />
      </div>
    </form>
  );
};

export { LoginForm };
