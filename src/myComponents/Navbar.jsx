import { ModeToggle } from "@/components/ui/toggleTheme/ModeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-5 ">
      <div className="mx-auto w-10/12">
        <nav className="flex items-center justify-between ">
          <h2 className="text-3xl font-bold ">Monster</h2>
          <div className="flex items-center  gap-5 text-sm">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
