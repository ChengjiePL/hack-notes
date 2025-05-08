"use client"

import Link from "next/link"
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Home, Terminal, BookOpen, BookText, Info, Shield } from "lucide-react"
import { useEffect } from "react"

const sidebarItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Tools", href: "/tools", icon: Terminal },
  { label: "Tutorials", href: "/tutorials", icon: BookOpen },
  { label: "Glossary", href: "/glossary", icon: BookText },
  { label: "About", href: "/about", icon: Info },
]

export function Sidebar() {
  const { state } = useSidebar()

  // Add class to body when sidebar is expanded/collapsed
  useEffect(() => {
    document.body.classList.toggle("sidebar-expanded", state === "expanded")
    document.body.classList.toggle("sidebar-collapsed", state === "collapsed")

    return () => {
      document.body.classList.remove("sidebar-expanded")
      document.body.classList.remove("sidebar-collapsed")
    }
  }, [state])

  return (
    <ShadcnSidebar collapsible="icon" variant="floating" className="minimalist-sidebar fixed top-14">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 px-2">
            <Shield className="h-4 w-4" />
            <span>Navigation</span>
          </SidebarGroupLabel>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild tooltip={item.label}>
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </ShadcnSidebar>
  )
}
