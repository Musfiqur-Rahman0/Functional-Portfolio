import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main>
      <p>Auth layout</p>
      <Outlet />
    </main>
  );
};

export default AuthLayout;
