import { ModeToggle } from "@/components/ui/toggleTheme/ModeToggle";
import useAuth from "@/hooks/useAuth";
import { use, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BackgroundCirlcle from "./BackgroundCirlcle";
import { navItems } from "@/consents/data";
import { motion } from "framer-motion";

const Navbar = () => {
  const { logout } = useAuth();
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <nav className="py-5 fixed w-full z-20 backdrop-blur-2xl">
      <div className=" max-w-7xl mx-auto">
        <nav className="flex items-center justify-between ">
          <figure className=" bg-gradient-to-b from-secondary to-primary rounded-full h-10 w-10 flex items-center justify-center">
            <img src="/src/assets/Logo-removebg-preview.png" alt="" />
          </figure>
          <div className="flex items-center  gap-5 text-sm">
            {navItems.map((item, i) => (
              <NavLink
                onClick={() => setSelectedPage(i)}
                key={i}
                to={item.pathName}
                className="capitalize relative"
              >
                {item.name}
                {i === selectedPage && (
                  <motion.div
                    className="h-1 w-full rounded-xl bg-primary absolute -bottom-1"
                    layoutId="underline"
                  />
                )}
              </NavLink>
            ))}
            <ModeToggle />
          </div>
        </nav>
      </div>
      {/* <button onClick={logout}>Logout</button> */}
    </nav>
  );
};
export default Navbar;
