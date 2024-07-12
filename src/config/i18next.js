import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const localStorageLanguageKey = "charity-language";

export const getLocalStorageLanguage = () => {
  return localStorage.getItem(localStorageLanguageKey) || "Eng";
};

export const setLocalStorageLanguage = (lang) =>
  localStorage.setItem(localStorageLanguageKey, lang);

i18next.use(initReactI18next).init({
  fallbackLng: ["Eng", "Rus"],
  lng: getLocalStorageLanguage(),
  resources: {
    Eng: {
      translation: {
        login: "Login",
        email: "Email",
        password: "Password",
        forgot_password: "Forgot your password?",
        registration: "Registration",
        log_in: "Log in",
        restore_access: "Restore access",
        restore_message:
          "If you have an account, you will receive a password reset link in this email.",
        send_code: "Send code",
        "error in sending reset password email":
          "Error in sending reset password email",
        create_new_pass: "Create a new password",
        new_pass: "New password",
        repeat_pass: "Repeat password",
        reset: "Reset",
        create_your_acc: "Create your account",
        name: "Name",
        agree:
          "By registering, you agree to our Terms of Service and Privacy Policy, and confirm that you are at least 18 years old.",
        already_acc: "Already have an account?",
        register: "Register",
        "Required field": "Required field",
        "Invalid email address": "Invalid email address",
        "New password doesn't match": "New password doesn't match",
        "Minimum 8 characters": "Minimum 8 characters",
        "Password successfully reset": "Password successfully reset",
        History: "History",
        "History is empty": "History is empty",
        views: "views",
        "Please enter your desired donation amount. Our invention initially costs $5.00.":
          "Please enter your desired donation amount. Our invention initially costs $5.00.",
        "Payment amount": "Payment amount",
        "Donate now": "Donate now",
        "Come back": "Come back",
        Total: "Total",
        Confirm: "Confirm",
        "Personal info": "Personal info",
        Language: "Language",
        Security: "Security",
        Contacts: "Contacts",
        Account: "Account",
        "First name": "First name",
        "Last name": "Last name",
        Save: "Save",
        Cancel: "Cancel",
        "Go out": "Go out",
        "Change account": "Change account",
        "Current Password": "Current Password",
        "Forgot password?": "Forgot password?",
        "New Password": "New Password",
        "Confirm Password": "Confirm Password",
        "error in sending reset password email.":
          "Error in sending reset password email.",
        "User already exists": "User already exists",
      },
    },
    Rus: {
      translation: {
        login: "Авторизоваться",
        email: "Электронная почта",
        password: "Пароль",
        forgot_password: "Забыли пароль?",
        registration: "Регистрация",
        log_in: "Авторизуйтесь",
        restore_access: "Восстановить доступ",
        restore_message:
          "Если у вас есть учетная запись, вы получите ссылку для сброса пароля на это письмо.",
        send_code: "Отправить код",
        "error in sending reset password email":
          "Ошибка при отправке письма для сброса пароля",
        create_new_pass: "Придумайте новый пароль",
        new_pass: "Новый пароль",
        repeat_pass: "Повторите пароль",
        reset: "Сбросить",
        create_your_acc: "Создайте свой аккаунт",
        name: "Имя",
        agree:
          "Регистрируясь, вы соглашаетесь с нашими Условиями обслуживания и Политикой конфиденциальности, а также подтверждаете, что вам исполнилось 18 лет.",
        already_acc: "У вас уже есть учетная запись?",
        register: "Зарегистрироваться",
        "Required field": "Поле обязательно для заполнения",
        "Invalid email address": "Недопустимый адрес электронной почты",
        "New password doesn't match": "Новый пароль не соответствует",
        "Minimum 8 characters": "Минимум 8 символов",
        "Password successfully reset": "Пароль успешно сброшен",
        History: "История",
        "History is empty": "История пуста",
        views: "просмотров",
        "Please enter your desired donation amount. Our invention initially costs $5.00.":
          "Пожалуйста, введите желаемый размер вашего пожертвования. Наше изобретение изначально стоит 5,00$.",
        "Payment amount": "Сумма взноса",
        "Donate now": "Пожертвовать сейчас",
        "Come back": "Вернуться назад",
        Total: "Всего",
        Confirm: "Подтвердить",
        "Personal info": "Личная информация",
        Language: "Язык",
        Security: "Безопасность",
        Contacts: "Контакты",
        Account: "Аккаунт",
        "First name": "Имя",
        "Last name": "Фамилия",
        Save: "Сохранить",
        Cancel: "Отмена",
        "Go out": "Выйти",
        "Change account": "Сменить аккаунт",
        "Current Password": "Текущий пароль",
        "Forgot password?": "Забыли пароль?",
        "New Password": "Новый пароль",
        "Confirm Password": "Подтвердите пароль",
        "error in sending reset password email.":
          "Ошибка при отправке электронного письма для сброса пароля.",
        "User already exists": "Пользователь уже существует",
      },
    },
  },
});
