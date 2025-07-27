import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router";

import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Users,
  Settings,
} from "lucide-react";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/Dashboard/sidebar/Sidebar";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const admin = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: Briefcase,
      items: [
        { title: "Manage Projects", url: "/dashboard/projects" },
        { title: "Add Project", url: "/dashboard/add-project" },
      ],
    },
    {
      title: "Blogs",
      url: "/dashboard/blogs",
      icon: FileText,
      items: [
        { title: "Manage Blogs", url: "/dashboard/blogs" },
        { title: "Add Blog", url: "/dashboard/add-blog" },
      ],
    },
    {
      title: "Skills",
      url: "/dashboard/skills",
      icon: Users,
      items: [
        { title: "Manage Skills", url: "/dashboard/skills" },
        { title: "Add Skill", url: "/dashboard/add-skill" },
      ],
    },
    {
      title: "Testimonials",
      url: "/dashboard/testimonials",
      icon: Users,
    },
    // {
    //   title: "Settings",
    //   url: "/dashboard/settings",
    //   icon: Settings,
    // },
  ];

  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <SidebarProvider>
      <AppSidebar navMain={admin} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {pathnames[1] && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link
                          to={`/dashboard/${pathnames[1]}`}
                          className="capitalize"
                        >
                          {pathnames[1].replace("-", " ")}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
