import { ModeToggle } from "@/components/ui/toggleTheme/ModeToggle";
import useAuth from "@/hooks/useAuth";
import { use } from "react";
import { Link, NavLink } from "react-router-dom";
import BackgroundCirlcle from "./BackgroundCirlcle";
import { navItems } from "@/consents/data";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="py-5 fixed w-full z-50 backdrop-blur-2xl">
      <div className=" max-w-7xl mx-auto">
        <nav className="flex items-center justify-between ">
          <figure className=" bg-gradient-to-b from-secondary to-primary rounded-full h-10 w-10 flex items-center justify-center">
            <img src="/src/assets/Logo-removebg-preview.png" alt="" />
          </figure>
          <div className="flex items-center  gap-5 text-sm">
            {navItems.map((item, i) => (
              <NavLink key={i} to={item.pathName} className="capitalize">
                {item.name}
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
