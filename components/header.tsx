"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, HardHat, Phone } from "lucide-react"

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/articles", label: "Articles" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-primary shadow-md py-2 border-none">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur transition-colors hover:bg-white/30">
            <HardHat className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white drop-shadow-sm">
            BuildCraft
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white drop-shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 text-sm text-white drop-shadow-sm">
            <Phone className="h-4 w-4 text-white/90" />
            <span className="font-medium">(555) 123-4567</span>
          </div>
          <Button asChild className="bg-white text-primary hover:bg-white/90 shadow-sm border-none">
            <Link href="/#contact">Get a Quote</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <HardHat className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">BuildCraft</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">(555) 123-4567</span>
                </div>
                <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
