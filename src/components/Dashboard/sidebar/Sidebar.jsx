"use client";

import * as React from "react";
import { LogOut, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavMain } from "../Navs/NavMain";
import { TeamSwitcher } from "../Navs/TeamSwitcher";
import { NavUser } from "../Navs/NavUser";

export function AppSidebar({ navMain, ...props }) {
  const user = {};
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarHeader>
          <TeamSwitcher />
        </SidebarHeader>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
