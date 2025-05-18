"use client";

import { LogOut } from "lucide-react";

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
import { mona } from "@/lib/font";
import { signOut } from "next-auth/react";
import { items } from "@/lib/constant";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="relative top-0  " collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-6">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={`${mona.className} w-full p-2  ${
                    pathname === item.link
                      ? "bg-primary-btn hover:bg-primary-btn rounded-md text-white "
                      : ""
                  }`}
                >
                  <SidebarMenuButton
                    asChild
                    className={`justify-center ${
                      pathname === item.link
                        ? "bg-primary-btn hover:bg-primary-btn  hover:text-white"
                        : ""
                    }`}
                  >
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
          className={`${mona.className} justify-center cursor-pointer hover:bg-primary-btn hover:text-white w-full mx-auto`}
          onClick={() => signOut({ redirectTo: "/signin" })}
        >
          <LogOut className="size-4" />
          <span>Sign out</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
