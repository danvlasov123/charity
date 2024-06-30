import { Link } from "react-router-dom";
import { Button } from "src/components/ui";
import { LoginForm } from "src/modules/forms";

import { PAGES_PATH } from "src/router";

import { useFormik } from "formik";

import { LoginSchema } from "src/utils/validation-schemas";

import { fetchLogin } from "src/api/auth/auth";
import { useDispatch } from "react-redux";

import { userActions } from "src/store/slices";

const Login = () => {
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
            {formik.errors.message}
          </span>
        )}
        <LoginForm formik={formik} />

        <div className="flex justify-center gap-10 pt-8 text-sm">
          <Link to={PAGES_PATH.reset.full}>Забыли пароль?</Link>
          <Link to={PAGES_PATH.register.full}>Регистрация</Link>
        </div>
      </div>
      <div>
        <Button
          onClick={formik.submitForm}
          loading={formik.isSubmitting}
          className="uppercase"
        >
          Авторизуйтесь
        </Button>
      </div>
    </div>
  );
};

export default Login;
