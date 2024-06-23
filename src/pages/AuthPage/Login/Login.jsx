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

      if (data.success) {
        return dispatch(userActions.setAuthorization(true));
      }

      setFieldError("message", "message");
    },
  });

  return (
    <div className="flex h-full flex-col justify-between pb-24 pt-20">
      <div>
        <LoginForm formik={formik} />
        <div className="px-6 pt-2.5">
          <p className="text-center text-xs">
            Посетите справочный центр , чтобы получить дополнительную помощь,
            если вы не можете войти в учетную запись
          </p>
        </div>
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
