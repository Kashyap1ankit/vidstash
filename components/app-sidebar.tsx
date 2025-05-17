"use client";

import { History, Home, LogOut, Send, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { mona, sora } from "@/lib/font";
import { signOut } from "next-auth/react";

// Menu items.
const items = [
  {
    title: "Home",
    link: "/dashboard",
    icon: Home,
  },
  {
    title: "History",
    link: "/dashboard/history",
    icon: History,
  },
  {
    title: "Shared Links",
    link: "/dashboard/share/links",
    icon: Send,
  },

  {
    title: "Settings",
    link: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="relative top-0  " collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-6">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={`${mona.className} mx-auto`}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.link}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="absolute bottom-0 md:bottom-22 left-0 w-full border-t bg-gray-100 ">
        <SidebarMenuButton
          className={`${mona.className} justify-center cursor-pointer hover:bg-orange-500 hover:text-white w-full mx-auto`}
          onClick={() => signOut({ redirectTo: "/signin" })}
        >
          <LogOut className="size-4" />
          <span>Sign out</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
