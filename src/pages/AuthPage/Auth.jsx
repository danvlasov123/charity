import React from "react";
import { Outlet } from "react-router-dom";

import { AuthLayout } from "src/layouts/layout";

const Auth = () => {
  return (
    <AuthLayout>
      <div className="flex justify-end pt-4">
        <img src="/logo.svg" alt="logo" height={54} />
      </div>
      <Outlet />
    </AuthLayout>
  );
};

export default Auth;
