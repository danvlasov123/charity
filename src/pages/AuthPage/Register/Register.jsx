import { Link } from "react-router-dom";
import { Button } from "src/components/ui";
import { RegisterForm } from "src/modules/forms";
import { PAGES_PATH } from "src/router";

import { useFormik } from "formik";

import { RegisterSchema } from "src/utils/validation-schemas";

import { fetchRegister } from "src/api/auth/auth";

import { useDispatch } from "react-redux";

import { userActions } from "src/store/slices";

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    const data = await fetchRegister(values);

    if (data.success) {
      return dispatch(userActions.setAuthorization(true));
    }
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: RegisterSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex h-full flex-col justify-between pb-24 pt-20">
      <div>
        <RegisterForm formik={formik} />
        <div className="px-6 pt-2.5">
          <p className="text-center text-xs">
            Регистрируясь, вы соглашаетесь с нашими Условиями
            обслуживания и Политикой конфиденциальности, а также подтверждаете,
            что вам исполнилось 18 лет.
          </p>
        </div>
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
