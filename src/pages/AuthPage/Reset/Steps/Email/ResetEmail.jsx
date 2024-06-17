import { Button, Input } from "src/components/ui";

const ResetEmail = () => {
  return (
    <div className="flex flex-col justify-between h-full">
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
        <Button>Отправить код</Button>
      </div>
    </div>
  );
};

export { ResetEmail };
