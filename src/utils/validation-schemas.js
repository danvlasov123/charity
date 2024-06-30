import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Поле Имя обязательно для заполнения"),
  email: Yup.string()
    .email("Недопустимый адрес электронной почты")
    .required("Поле Электронная почта обязательно для заполнения"),
  password: Yup.string().required("Поле Пароль обязательно для заполнения"),
  message: Yup.string(),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Недопустимый адрес электронной почты")
    .required("Поле Электронная почта обязательно для заполнения"),
  password: Yup.string().required("Поле Пароль обязательно для заполнения"),
  message: Yup.string(),
});

export const UpdatePasswordSchema = Yup.object().shape({
  "current-password": Yup.string().required(
    "Текуший пароль обятелен для заполнения",
  ),
  "new-password": Yup.string()
    .min(8, "Минимум 8 символов")
    .required("Новый пароль обятелен для заполнения"),
  "confirm-password": Yup.string()
    .oneOf([Yup.ref("new-password"), null], "Новый пароль не совпадает")
    .required("Подтвердите новый пароль"),
});

export const UpdateUserSchema = Yup.object().shape({
  "user-name": Yup.string().required("Поле обязательно для заполнение"),
  "display-name": Yup.string().required("Поле обязательно для заполнение"),
});
