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

const Navbar = () => {
  const isAdmin = true;
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
  ];

  const navLinks = (
    <>
      {pages.map((page) => (
        <NavigationMenuItem key={page.id}>
          <NavigationMenuLink href={page.path} key={page.id}>
            {page.name}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </>
  );

  return (
    <section className="py-4 ">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <a
            // href="https://www.shadcnblocks.com"
            className="flex items-center gap-2"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8"
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tighter">
              MusfiqurRahman.Hub
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>{navLinks}</NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className={
                "hover:bg-inherit hover:text-inherit hover:border-none cursor-pointer"
              }
            >
              Sign in
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="https://www.shadcnblocks.com"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Shadcnblocks.com
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-5">
                {pages.map((page) => (
                  <Link to={page.path} key={page.id}>
                    {page.name}
                  </Link>
                ))}
              </div>

              <Button className={"mt-6"} variant="outline">
                Sign in
              </Button>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
