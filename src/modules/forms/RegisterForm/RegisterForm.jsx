import { useTranslation } from "react-i18next";
import { Input, Checkbox } from "src/components/ui";

const RegisterForm = ({ formik }) => {
  const { t } = useTranslation();
  const { handleChange, values, errors, handleBlur, touched, handleSubmit } =
    formik;

  return (
    <form>
      <p className="text-sm">{t("create_your_acc")}</p>
      <div>
        <Input
          className="mt-2.5"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          placeholder={t("name")}
          error={touched.name && t(errors.name)}
          name="name"
        />
      </div>
      <div className="pt-7">
        <Input
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
      <div className="pt-6">
        <Checkbox
          onChange={handleChange}
          onBlur={handleBlur}
          checked={values.agree}
          error={touched.agree && t(errors.agree)}
          name="agree"
          id="agree"
          label={t("agree")}
        />
      </div>
    </form>
  );
};

export { RegisterForm };
