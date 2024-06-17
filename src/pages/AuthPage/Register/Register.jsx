import React from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui";
import { RegisterForm } from "src/modules/forms";
import { PAGES_PATH } from "src/router";

const Register = () => {
  return (
    <div className="flex h-full flex-col justify-between pb-24 pt-20">
      <div>
        <RegisterForm />
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
        <Button>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
      </div>
    </div>
  );
};

export default Register;
