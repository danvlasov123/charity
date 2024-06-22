import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Поле Имя обязательно для заполнения"),
  email: Yup.string()
    .email("Недопустимый адрес электронной почты")
    .required("Поле Электронная почта обязательно для заполнения"),
  password: Yup.string().required("Поле Пароль обязательно для заполнения"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Недопустимый адрес электронной почты")
    .required("Поле Электронная почта обязательно для заполнения"),
  password: Yup.string().required("Поле Пароль обязательно для заполнения"),
});
