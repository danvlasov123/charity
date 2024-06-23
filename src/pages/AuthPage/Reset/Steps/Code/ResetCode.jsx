import { Button, Input } from "src/components/ui";

import { constants } from "src/pages/AuthPage/Reset/Reset";

const ResetCode = ({ onSubmit }) => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h1 className="uppercase">Восстановить доступ</h1>
        <p className="pt-8 text-xs">
          Пожалуйста, проверьте свой адрес электронной почты на наличие
          временной ссылки для сброса пароля и убедитесь, что вы установили
          новый сразу после нажатия на нее.
        </p>
        <div className="pt-5">
          <Input placeholder="Код" />
          <button className="ml-auto block pt-2.5 text-sm">
            Не пришел код
          </button>
        </div>
      </div>
      <div>
        <Button
          className="uppercase"
          onClick={() => onSubmit(constants.steps.code)}
        >
          Подтвердить
        </Button>
      </div>
    </div>
  );
};

export { ResetCode };
