import Footer from "@/myComponents/Footer";
import Navbar from "@/myComponents/Navbar";
import ScrollToTop from "@/myComponents/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { motion } from "framer-motion";
const Layout = () => {
  const location = useLocation();
  const navigation = useNavigation();

  return (
    <div className="bg-[#11071F] text-white ">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        {navigation.state === "loading" && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: 1,
              width: "100%",
              transition: { duration: 0.5 },
            }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ ease: "linear" }}
            className="fixed w-screen h-2 bg-red-600 rounded-full z-50 top-0 "
          ></motion.div>
        )}
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-376px)] pt-24 flex items-center justify-center">
          <Outlet />
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
