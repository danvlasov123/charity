import React from "react";
import { Input } from "src/components/ui";

const LoginForm = ({ formik }) => {
  const { handleChange, values, errors, handleBlur, touched } = formik;

  return (
    <form>
      <p className="text-sm">Авторизоваться</p>
      <div>
        <Input
          className="mt-2.5"
          type="email"
          placeholder="Электронная почта"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={touched.email && errors.email}
        />
      </div>
      <div className="pt-7">
        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={touched.password && errors.password}
        />
      </div>
    </form>
  );
};

export { LoginForm };
