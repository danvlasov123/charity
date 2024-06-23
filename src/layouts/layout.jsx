import { Outlet, Navigate } from "react-router-dom";
import { PAGES_PATH } from "../router";

import cn from "classnames";

import { Menu } from "./menu/Menu";

import { useSelector } from "react-redux";

const Layout = ({ children, className = "", wrapperClassName = "" }) => {
  return (
    <div className={cn("mx-auto w-full text-sm md:max-w-xl", wrapperClassName)}>
      <div
        className={cn(
          "relative h-[100dvh] overflow-y-auto overflow-x-hidden border-grey md:border-x",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

const AuthLayout = ({ children }) => {
  const isAuthorization = useSelector((state) => state.user.isAuthorization);

  if (isAuthorization) {
    return <Navigate to={PAGES_PATH.main.full} />;
  }

  return (
    <Layout className="overflow-y-hidden px-6">
      {children ? children : <Outlet />}
    </Layout>
  );
};

const PrivateLayout = ({ isShowMenu = true }) => {
  const isAuthorization = useSelector((state) => state.user.isAuthorization);

  if (!isAuthorization) {
    return <Navigate to={PAGES_PATH.login.full} />;
  }

  const className = cn({ "pb-16": isShowMenu, "pb-12": !isShowMenu });

  return (
    <Layout className={className}>
      <Outlet />
      {isShowMenu && <Menu />}
    </Layout>
  );
};

export { Layout, PrivateLayout, AuthLayout };
