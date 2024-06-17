import React from "react";
import { Input } from "src/components/ui";

const RegisterForm = () => {
  return (
    <form>
      <p className="text-sm">Создайте свой аккаунт</p>
      <div>
        <Input className="mt-2.5" placeholder="Имя" required />
      </div>
      <div className="pt-7">
        <Input type="email" placeholder="Электронная почта" required />
      </div>
      <div className="pt-7">
        <Input type="password" placeholder="Пароль" required />
      </div>
    </form>
  );
};

export { RegisterForm };
