import { Link } from "react-router-dom";
import { Button } from "src/components/ui";
import { LoginForm } from "src/modules/forms";

import { PAGES_PATH } from "src/router";

import { useFormik } from "formik";

import { LoginSchema } from "src/utils/validation-schemas";

import { fetchLogin } from "src/api/auth/auth";
import { useDispatch } from "react-redux";

import { userActions } from "src/store/slices";

import { constants } from "../Reset/Reset";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setFieldError }) => {
      const data = await fetchLogin(values);

      const { success, ...tokens } = data;

      if (success) {
        dispatch(userActions.setTokens(tokens));
        return dispatch(userActions.setAuthorization(true));
      }

      setFieldError("message", data.error);
    },
  });

  return (
    <div className="flex h-full flex-col justify-between pb-24 pt-20">
      <div className="relative">
        {formik.errors.message && (
          <span className="absolute -top-6 left-0 pb-2 text-red">
            {t(formik.errors.message)}
          </span>
        )}
        <LoginForm formik={formik} />

        <div className="flex justify-center gap-10 pt-8 text-sm">
          <Link to={PAGES_PATH.reset.full(constants.steps.email)}>
            {t("forgot_password")}
          </Link>
          <Link to={PAGES_PATH.register.full}>{t("registration")}</Link>
        </div>
      </div>
      <div>
        <Button
          onClick={formik.submitForm}
          loading={formik.isSubmitting}
          className="uppercase"
        >
          {t("log_in")}
        </Button>
      </div>
    </div>
  );
};

export default Login;
