import { createBrowserRouter, Navigate } from "react-router-dom";

import { Auth, Login, Register, Reset } from "./pages/AuthPage";
import { Main } from "./pages/Main";

import { PrivateLayout } from "./layouts";

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
