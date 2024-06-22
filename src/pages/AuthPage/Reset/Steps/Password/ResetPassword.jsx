import { Button, Input } from "src/components/ui";

import { Link } from "react-router-dom";

import { PAGES_PATH } from "src/router";

const ResetPassword = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h1 className="uppercase">Придумайте новый пароль</h1>
        <div className="pt-2.5">
          <Input placeholder="Новый пароль" type="password" />
        </div>
        <div className="pt-7">
          <Input placeholder="Повторить снова" type="password" />
        </div>
        <Link
          to={PAGES_PATH.register.full}
          className="ml-auto block w-fit pt-2.5 text-sm"
        >
          Регистрация
        </Link>
      </div>
      <div>
        <Button>Авторизуйтесь</Button>
      </div>
    </div>
  );
};

export { ResetPassword };
