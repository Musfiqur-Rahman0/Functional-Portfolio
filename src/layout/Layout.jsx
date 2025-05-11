import Footer from "@/myComponents/Footer";
import Navbar from "@/myComponents/Navbar";
import ScrollToTop from "@/myComponents/ScrollToTop";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#11071F] text-white">
      <ScrollToTop />
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-376px)] pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
