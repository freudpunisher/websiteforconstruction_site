"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Image from "next/image"

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
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-white shadow-md py-2 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center group">
          <div className="relative flex h-16 w-auto items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/icon/ecobus.png"
              alt="ECOBUS logo"
              width={180}
              height={64}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium">(555) 123-4567</span>
          </div>
          <Button asChild className="shadow-sm border-none">
            <Link href="/#contact">Get a Quote</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-black/5">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <div className="flex h-16 w-auto items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/icon/ecobus.png"
                    alt="ECOBUS logo"
                    width={160}
                    height={56}
                    className="h-12 w-auto object-contain"
                  />
                </div>
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
