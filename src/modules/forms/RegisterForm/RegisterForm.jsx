import { Input, Checkbox } from "src/components/ui";

const RegisterForm = ({ formik }) => {
  const { handleChange, values, errors, handleBlur, touched, handleSubmit } =
    formik;

  return (
    <form>
      <p className="text-sm">Создайте свой аккаунт</p>
      <div>
        <Input
          className="mt-2.5"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          placeholder="Имя"
          error={touched.name && errors.name}
          name="name"
        />
      </div>
      <div className="pt-7">
        <Input
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
      <div className="pt-6">
        <Checkbox
          onChange={handleChange}
          onBlur={handleBlur}
          checked={values.agree}
          error={touched.agree && errors.agree}
          name="agree"
          id="agree"
          label="Регистрируясь, вы соглашаетесь с нашими Условиями
            обслуживания и Политикой конфиденциальности, а также подтверждаете,
            что вам исполнилось 18 лет."
        />
      </div>
    </form>
  );
};

export { RegisterForm };
