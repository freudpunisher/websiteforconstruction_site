"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone, Menu, ChevronDown } from "lucide-react"
import { useTranslation } from "@/lib/i18n/context"
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { t, locale, setLocale } = useTranslation()

  const navItems = [
    { href: "/services", label: t('nav.services') || "Services", isDropdown: true },
    { href: "/#about", label: t('nav.about') || "About" },
    { href: "/#projects", label: t('nav.projects') || "Projects" },
    { href: "/#process", label: t('nav.process') || "Process" },
    { href: "/gallery", label: t('nav.gallery') || "Gallery" },
    { href: "/articles", label: t('nav.articles') || "Articles" },
    { href: "/#contact", label: t('nav.contact') || "Contact" },
  ]

  const services = (t('services.items') as any[]) || []

  return (
    <header className="fixed top-0 z-[100] w-full bg-white border-b border-zinc-200 h-[140px] shadow-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-4 lg:px-8">
        {/* LOGO SECTION */}
        <Link href="/#hero" className="flex items-center relative z-[110]">
          <div className="relative flex h-[100px] w-auto items-center justify-center translate-y-2">
            <img
              src="/assets/icon/ecobus.png"
              alt="ECOBUS logo"
              className="h-full w-auto object-contain drop-shadow-md"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 lg:flex h-full">
          {navItems.map((item) => (
            <div key={item.label} className="relative group h-full flex items-center">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[13px] font-extrabold uppercase tracking-[0.2em] text-zinc-900 hover:text-sky-500 transition-colors"
              >
                {item.label}
                {item.isDropdown && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
              </Link>

              {item.isDropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[120]">
                  <div className="bg-white border border-zinc-200 rounded-xl p-3 min-w-[240px] shadow-xl">
                    <div className="flex flex-col gap-1">
                      {services.map((service, index) => (
                        <Link
                          key={service.title}
                          href={`/services/${index}`}
                          className="px-4 py-2 rounded-lg hover:bg-zinc-50 text-[12px] font-bold text-zinc-700 hover:text-sky-500 transition-all uppercase tracking-wider"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-600 uppercase tracking-widest">
            <Phone className="h-4 w-4 text-sky-500" />
            <span>+257 79 66 02 20</span>
          </div>

          <Select value={locale} onValueChange={(value) => setLocale(value as 'fr' | 'en')}>
            <SelectTrigger className="w-[80px] h-9 rounded-full bg-zinc-100 border-none text-zinc-900 font-bold text-[10px]">
              <SelectValue>
                {locale === 'fr' ? '🇫🇷 FR' : '🇺🇸 EN'}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">🇫🇷 FR</SelectItem>
              <SelectItem value="en">🇺🇸 EN</SelectItem>
            </SelectContent>
          </Select>

          <Button asChild className="rounded-full bg-sky-500 hover:bg-sky-600 text-white px-6 h-10 text-[10px] uppercase font-bold tracking-widest">
            <Link href="/#contact">{t('nav.quote') || "Quote"}</Link>
          </Button>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex items-center gap-3 lg:hidden">
          <Select value={locale} onValueChange={(value) => setLocale(value as 'fr' | 'en')}>
            <SelectTrigger className="w-[65px] h-8 rounded-lg bg-zinc-100 border-none text-zinc-900 text-[10px] font-bold">
              <SelectValue>{locale === 'fr' ? '🇫🇷' : '🇺🇸'}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">🇫🇷</SelectItem>
              <SelectItem value="en">🇺🇸</SelectItem>
            </SelectContent>
          </Select>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-zinc-900">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-zinc-200 p-0">
              <div className="flex flex-col h-full pt-16 px-6">
                <nav className="flex flex-col gap-6 overflow-y-auto pb-10">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.isDropdown ? (
                        <div className="flex flex-col">
                          <button
                            className="text-lg font-bold uppercase tracking-wider text-zinc-900 group"
                          >
                            <Link href={item.href} onClick={() => setIsOpen(false)} className="hover:text-sky-500 py-2 block text-left">
                              {item.label}
                            </Link>
                          </button>
                          <div className="flex flex-col gap-4 mt-2 pl-4 border-l border-zinc-200 py-2">
                            {services.map((service, index) => (
                              <Link
                                key={service.title}
                                href={`/services/${index}`}
                                className="text-[11px] font-bold text-zinc-600 hover:text-sky-500 uppercase tracking-widest leading-relaxed"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-lg font-bold uppercase tracking-wider text-zinc-900 hover:text-sky-500 py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
