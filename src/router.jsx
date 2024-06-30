import { createBrowserRouter, Navigate } from "react-router-dom";

import { Auth, Login, Register, Reset } from "./pages/AuthPage";
import { Main } from "./pages/Main";

import { PrivateLayout } from "./layouts/layout";

import { Donate, Confirm } from "./pages/Donate";
import {
  Settings,
  SettingsUser,
  SettingsPassword,
  SettingsLanguage,
} from "./pages/Settings";

export const PAGES_PATH = {
  main: {
    base: "",
    parent: "/",
    full: "/",
  },
  auth: {
    base: "auth",
    parent: "/",
    full: "/auth",
  },
  login: {
    parent: "/auth",
    base: "login",
    full: "/auth/login",
  },
  register: {
    parent: "/register",
    base: "register",
    full: "/auth/register",
  },
  reset: {
    parent: "/reset",
    base: "reset",
    full: "/auth/reset",
  },
  donate: {
    parent: "/",
    base: "donate/:id",
    full: (id) => `/donate/${id}`,
  },
  confirm: {
    parent: "/",
    base: "donate/:id/confirm",
    full: (id) => `/donate/${id}/confirm`,
  },
  settings: {
    parent: "/",
    base: "settings",
    full: "/settings",
  },
  password: {
    parent: "/settings",
    base: "settings/password",
    full: "/settings/password",
  },
  user: {
    parent: "/settings",
    base: "settings/user",
    full: "/settings/user",
  },
  language: {
    parent: "/settings",
    base: "settings/language",
    full: "/settings/language",
  },
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: PAGES_PATH.main.base,
        element: <Main />,
      },
      {
        path: PAGES_PATH.settings.base,
        element: <Settings />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateLayout isShowMenu={false} />,
    children: [
      {
        path: PAGES_PATH.donate.base,
        element: <Donate />,
      },
      {
        path: PAGES_PATH.confirm.base,
        element: <Confirm />,
      },
      {
        path: PAGES_PATH.password.base,
        element: <SettingsPassword />,
      },
      {
        path: PAGES_PATH.user.base,
        element: <SettingsUser />,
      },
      {
        path: PAGES_PATH.language.base,
        element: <SettingsLanguage />,
      },
    ],
  },
  {
    path: PAGES_PATH.auth.full,
    element: <Auth />,
    children: [
      {
        path: PAGES_PATH.login.base,
        element: <Login />,
      },
      {
        path: PAGES_PATH.register.base,
        element: <Register />,
      },
      {
        path: PAGES_PATH.reset.base,
        element: <Reset />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={PAGES_PATH.auth.full} />,
  },
]);
