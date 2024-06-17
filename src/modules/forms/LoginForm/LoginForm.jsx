import React from "react";
import { Input } from "src/components/ui";

const LoginForm = () => {
  return (
    <form>
      <p className="text-sm">Авторизоваться</p>
      <div>
        <Input
          className="mt-2.5"
          type="email"
          placeholder="Электронная почта"
          required
        />
      </div>
      <div className="pt-7">
        <Input type="password" placeholder="Пароль" required />
      </div>
    </form>
  );
};

export { LoginForm };
