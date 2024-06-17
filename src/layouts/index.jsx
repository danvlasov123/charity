import { Outlet, Navigate } from "react-router-dom";
import { PAGES_PATH } from "../router";

const isAuthorization = false;

const Layout = ({ children }) => {
  return (
    <div className="relative mx-auto h-full w-full max-w-xl px-6 text-sm">
      {children}
    </div>
  );
};

const AuthLayout = ({ children }) => {
  if (isAuthorization) {
    return <Navigate to={PAGES_PATH.main.full} />;
  }

  return <Layout>{children ? children : <Outlet />}</Layout>;
};

const PrivateLayout = () => {
  if (!isAuthorization) {
    return <Navigate to={PAGES_PATH.login.full} />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export { Layout, PrivateLayout, AuthLayout };
