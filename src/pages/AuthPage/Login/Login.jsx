import React from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui";
import { LoginForm } from "src/modules/forms";

import { PAGES_PATH } from "src/router";

const Login = () => {
  return (
    <div className="flex h-full flex-col justify-between pb-24 pt-20">
      <div>
        <LoginForm />
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
        <Button>Авторизуйтесь</Button>
      </div>
    </div>
  );
};

export default Login;
