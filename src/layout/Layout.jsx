import Footer from "@/myComponents/Footer";
import Navbar from "@/myComponents/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-376px)]">
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
