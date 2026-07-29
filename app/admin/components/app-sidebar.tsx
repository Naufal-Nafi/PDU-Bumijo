"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wrench,
  Package,
  Images,
  Mail,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/actions/auth.action";

const navItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Layanan", url: "/admin/layanan", icon: Wrench },
  { title: "Produk", url: "/admin/produk", icon: Package },
  { title: "Galeri", url: "/admin/galeri", icon: Images },
  { title: "Kontak", url: "/admin/kontak", icon: Mail },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="" collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <span className="font-fraunces text-xl font-bold truncate">
            PDU Bumijo
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive =
                  item.url === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.url);

                return (
                  <SidebarMenuItem className="" key={item.url}>
                    <SidebarMenuButton className="hover:bg-dark-primary hover:text-background duration-300" isActive={isActive} tooltip={item.title} render={
                      <Link className="flex gap-3 items-center w-full h-full p-0 bg-transparent text-base" href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    }/>
                      {/* <Link className="flex gap-3 items-center w-full h-full p-0 bg-transparent text-base" href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton> */}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <form action={logoutAction}>
          <Button
            type="submit"
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <LogOut className="size-4" />
            <span>Keluar</span>
          </Button>
        </form>
      </SidebarFooter>
    </Sidebar>
  );
}