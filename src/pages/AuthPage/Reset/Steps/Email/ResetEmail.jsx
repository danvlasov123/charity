import { Button, Input } from "src/components/ui";

import { constants } from "../../Reset";

const ResetEmail = ({ onSubmit }) => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h1 className="uppercase">Восстановить доступ</h1>
        <p className="pt-8 text-xs">
          Если у вас есть учетная запись, вы получите ссылку для сброса пароля
          на это письмо.
        </p>
        <div className="pt-5">
          <Input placeholder="Электронная почта" type="gmail" />
        </div>
      </div>
      <div>
        <Button
          className="uppercase"
          onClick={() => onSubmit(constants.steps.code)}
        >
          Отправить код
        </Button>
      </div>
    </div>
  );
};

export { ResetEmail };
