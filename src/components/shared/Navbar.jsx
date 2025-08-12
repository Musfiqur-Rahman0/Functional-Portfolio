import { MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router";
import useUserRole from "@/hooks/useUserRole";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import useAuth from "@/hooks/useAuth";
import { AnimatePresence, motion } from "motion/react";
import { Skeleton } from "../ui/skeleton";
import { use, useState } from "react";
import { AuthContext } from "@/Context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Navbar = () => {
  const { role, roleLoading } = useUserRole();
  const { isLoading } = use(AuthContext);
  const { user, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const isAdmin = role === "admin";
  const navigate = useNavigate();

  const pages = [
    {
      id: "001",
      name: "Home",
      path: "/",
    },
    isAdmin && {
      id: "008",
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "002",
      name: "About",
      path: "/about",
    },
    {
      id: "003",
      name: "Projects",
      path: "/projects",
    },
    {
      id: "004",
      name: "Skills",
      path: "/skills",
    },
    {
      id: "005",
      name: "Contact",
      path: "/contact",
    },
  ].filter(Boolean);

  const navLinks = (
    <>
      {pages.map((page) => (
        <NavigationMenuItem key={page.id}>
          <NavigationMenuLink>
            <Link to={page.path}>{page.name}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </>
  );

  const userAvatar = (
    <Avatar className="cursor-pointer size-14 hover:ring-2 ring-primary/50 ">
      <AvatarImage
        src={user?.photoURL}
        alt={user?.name}
        className="h-10 w-10 rounded-full object-cover"
      />
      <AvatarFallback className={"text-black"}>
        {user?.displayName ? user?.displayName?.charAt(0) : "U"}
      </AvatarFallback>
    </Avatar>
  );

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleLogout = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out from your account.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await logout();
          if (res.success) {
            toast.success("Sucessfully loged Out");
            navigate("/login");
          }
        }
      });
    } catch (error) {
      toast.error("Failed to logout ", error);
      console.log(error);
    }
  };

  return (
    <section className="py-4 fixed top-0 w-full z-[100] ">
      <div className="backdrop-blur-md max-w-7xl mx-auto ">
        <nav className=" flex items-center justify-between">
          <a
            // href="https://www.shadcnblocks.com"
            className="flex items-center gap-2"
          >
            {/* TODO  add a logo here  */}
            {/* <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8"
              alt="Shadcn UI Navbar"
            /> */}
            <Link to={"/"} className="text-lg font-semibold tracking-tighter">
              MusfiqurRahman.Hub
            </Link>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>{navLinks}</NavigationMenuList>
          </NavigationMenu>
          {/* <div className="hidden items-center gap-4 lg:flex">
            {user && user.email ? (
              userAvatar
            ) : (
              <Button
                variant="ghost"
                onClick={() => navigate("/login")}
                className={
                  "hover:bg-inherit hover:text-inherit hover:border-none cursor-pointer"
                }
              >
                Sign in
              </Button>
            )}
          </div> */}

          <div className="hidden items-center gap-4 lg:flex">
            {isLoading ? (
              <Skeleton className="h-10 w-10 rounded-full animate-pulse" />
            ) : !user ? (
              <Link to="/login">
                <Button variant="ghost" className={"hover:bg-none"}>
                  Login
                </Button>
              </Link>
            ) : (
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                  <button onClick={toggleDropdown} className="outline-none">
                    <Avatar className="cursor-pointer size-14 hover:ring-2 ring-primary/50 ">
                      <AvatarImage
                        src={user?.photoURL}
                        alt={user?.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <AvatarFallback className={"text-black"}>
                        {user?.displayName ? user?.displayName?.charAt(0) : "U"}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>

                <AnimatePresence>
                  {isOpen && (
                    <DropdownMenuContent asChild sideOffset={8}>
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white shadow-lg rounded-md w-48 py-2 z-50"
                      >
                        <div className="capitalize px-3 py-2 border-b text-sm text-gray-700">
                          {user.displayName || user.email}
                        </div>
                        {isAdmin && (
                          <DropdownMenuItem asChild>
                            <Link
                              to="/dashboard"
                              className="px-3 py-2 w-full hover:bg-gray-100 text-sm cursor-pointer"
                            >
                              Dashboard
                            </Link>
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem
                          onClick={handleLogout}
                          className="px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                        >
                          Logout
                        </DropdownMenuItem>
                      </motion.div>
                    </DropdownMenuContent>
                  )}
                </AnimatePresence>
              </DropdownMenu>
            )}
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4 font-bold text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link to={"/"} className="flex items-center gap-2">
                    {/* <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    /> */}
                    <span className="text-lg font-semibold tracking-tighter">
                      Musfiqurrahman'sHub
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-5">
                {pages.map((page) => (
                  <Link to={page.path} key={page.id}>
                    {page.name}
                  </Link>
                ))}
              </div>

              {user && user?.email ? (
                <Button className={"mt-6"} variant="outline">
                  Log Out
                </Button>
              ) : (
                <Button className={"mt-6"} variant="outline">
                  Sign in
                </Button>
              )}
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
