import { Link } from "react-router-dom";
import { Button } from "src/components/ui";
import { RegisterForm } from "src/modules/forms";
import { PAGES_PATH } from "src/router";

import { useFormik } from "formik";

import { RegisterSchema } from "src/utils/validation-schemas";

import { fetchRegister, fetchLogin } from "src/api/auth/auth";

import { useUser } from "src/hooks";

const Register = () => {
  const { dispatch, userActions } = useUser();

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", agree: true },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setFieldError }) => {
      const registerData = await fetchRegister(values);

      if (registerData.success) {
        const loginData = await fetchLogin({
          email: values.email,
          password: values.password,
        });

        const { success, ...tokens } = loginData;

        if (success) {
          dispatch(userActions.setAuthorization(true));
          return dispatch(userActions.setTokens(tokens));
        }
      }

      console.log({ registerData });

      setFieldError("message", registerData.error);
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
        <RegisterForm formik={formik} />
        <div className="pt-5 text-center text-sm">
          <p>
            У вас уже есть учетная запись? 
            <Link
              to={PAGES_PATH.login.full}
              className="underline underline-offset-2 hover:opacity-85"
            >
              {" "}
              Авторизуйтесь
            </Link>
          </p>
        </div>
      </div>
      <div>
        <Button
          onClick={formik.submitForm}
          loading={formik.isSubmitting}
          className="uppercase"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
      </div>
    </div>
  );
};

export default Register;
