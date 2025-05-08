"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Shield, Menu } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Glossary", href: "/glossary" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <SidebarTrigger className="mr-2">
          <Menu className="h-5 w-5" />
        </SidebarTrigger>

        <Link href="/" className="flex items-center gap-2 mr-6">
          <Shield className="h-6 w-6" />
          <span className="font-semibold hidden sm:inline-block">Ethical Hacking Help</span>
          <span className="font-semibold sm:hidden">EHH</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
