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
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: "/services", label: t('nav.services'), isDropdown: true },
    { href: "/#about", label: t('nav.about') },
    { href: "/#projects", label: t('nav.projects') },
    { href: "/#process", label: t('nav.process') },
    { href: "/gallery", label: t('nav.gallery') },
    { href: "/articles", label: t('nav.articles') },
    { href: "/#contact", label: t('nav.contact') },
  ]

  const services = t('services.items') as any[]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 transform translate-y-0 bg-white border-b border-black/5 py-0 shadow-md`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8 overflow-visible">
        <Link href="/#hero" className="flex items-center group relative z-[60]">
          <div className="relative flex h-[120px] w-auto items-center justify-center transition-all duration-500 group-hover:scale-105 origin-top-left lg:translate-y-6 translate-y-4">
            <img
              src="/assets/icon/ecobus.png"
              alt="ECOBUS logo"
              className="h-full w-auto object-contain transition-all duration-500 drop-shadow-xl"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-16 lg:flex h-full ml-auto mr-16">
          {navItems.map((item) => (
            <div key={item.label} className="relative group/item h-full flex items-center">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[13px] font-extrabold uppercase tracking-[0.3em] transition-all duration-300 hover:text-sky-500 text-foreground"
              >
                {item.label}
                {item.isDropdown && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/item:rotate-180" />}
              </Link>

              {item.isDropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-500 z-[70]">
                  <div className="bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 min-w-[280px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-1">
                      {services.map((service, index) => (
                        <Link
                          key={service.title}
                          href={`/services/${index}`}
                          className="group/link flex items-center px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
                        >
                          <span className="text-[12px] text-white/90 font-bold uppercase tracking-widest group-hover/link:text-sky-400 transition-colors">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
            <Phone className="h-4 w-4 text-sky-400" />
            <span className="text-nowrap">+257 123 456 78</span>
          </div>

          <Select value={locale} onValueChange={(value) => setLocale(value as 'fr' | 'en')}>
            <SelectTrigger className="w-[85px] h-9 rounded-full border-none shadow-none focus:ring-0 transition-colors bg-black/5 text-foreground hover:bg-black/10">
              <SelectValue>
                <span className="flex items-center gap-2">
                  <span>{locale === 'fr' ? '🇫🇷' : '🇺🇸'}</span>
                  <span className="text-[10px] uppercase font-bold text-nowrap">{locale === 'fr' ? 'FR' : 'EN'}</span>
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">
                <span className="flex items-center gap-2">
                  <span>🇫🇷</span>
                  <span className="text-[10px] uppercase font-bold text-nowrap tracking-widest">FR (FRANÇAIS)</span>
                </span>
              </SelectItem>
              <SelectItem value="en">
                <span className="flex items-center gap-2">
                  <span>🇺🇸</span>
                  <span className="text-[10px] uppercase font-bold text-nowrap tracking-widest">EN (ENGLISH)</span>
                </span>
              </SelectItem>
            </SelectContent>
          </Select>

          <Button asChild className="rounded-full bg-sky-500 hover:bg-sky-600 text-white px-6 h-10 text-[10px] uppercase font-bold tracking-widest transition-all hover:scale-105 active:scale-95">
            <Link href="/#contact">{t('nav.quote')}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <Select value={locale} onValueChange={(value) => setLocale(value as 'fr' | 'en')}>
            <SelectTrigger className="w-[70px] h-8 rounded-lg border-none shadow-none focus:ring-0 bg-black/5 text-foreground">
              <SelectValue>
                {locale === 'fr' ? '🇫🇷' : '🇺🇸'}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">🇫🇷 FR</SelectItem>
              <SelectItem value="en">🇺🇸 EN</SelectItem>
            </SelectContent>
          </Select>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px] bg-black text-white border-white/10">
              <div className="flex flex-col gap-12 pt-12 h-full">
                <Link href="/#hero" className="flex justify-center" onClick={() => setIsOpen(false)}>
                  <img
                    src="/logo.png"
                    alt="ECOBUS logo"
                    className="h-16 w-auto object-contain brightness-0 invert"
                  />
                </Link>
                <nav className="flex flex-col gap-8 items-center overflow-y-auto max-h-[60vh] py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-xl font-bold uppercase tracking-[0.25em] transition-colors hover:text-sky-400 text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-8 pb-12 items-center w-full">
                  <div className="flex flex-col gap-4 items-center">
                    <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-white/70">
                      <Phone className="h-5 w-5 text-sky-400" />
                      <span>+257 123 456 78</span>
                    </div>
                    <Select value={locale} onValueChange={(value) => setLocale(value as 'fr' | 'en')}>
                      <SelectTrigger className="w-[130px] h-12 rounded-xl bg-white/10 border-none text-white focus:ring-0">
                        <SelectValue>
                          <div className="flex items-center gap-2">
                            <span>{locale === 'fr' ? '🇫🇷' : '🇺🇸'}</span>
                            <span className="uppercase font-bold tracking-widest text-[11px]">{locale === 'fr' ? 'Français' : 'English'}</span>
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/10 text-white">
                        <SelectItem value="fr">🇫🇷 Français</SelectItem>
                        <SelectItem value="en">🇺🇸 English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button asChild className="w-full h-16 text-lg rounded-2xl bg-sky-500 hover:bg-sky-600 font-bold uppercase tracking-[0.25em]" onClick={() => setIsOpen(false)}>
                    <Link href="#contact">{t('nav.quote')}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
