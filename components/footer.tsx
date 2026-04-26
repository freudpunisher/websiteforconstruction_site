"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/context"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const { t, locale, setLocale } = useTranslation()

  const footerLinks = {
    services: [
      { href: "/services/0", label: t('services.items')[0].title },
      { href: "/services/1", label: t('services.items')[1].title },
      { href: "/services/2", label: t('services.items')[2].title },
      { href: "/services/3", label: t('services.items')[3].title },
      { href: "/services/4", label: t('services.items')[4].title },
    ],
    company: [
      { href: "/#about", label: t('nav.about') },
      { href: "/#projects", label: t('nav.projects') },
      { href: "/#process", label: t('nav.process') },
      { href: "/gallery", label: t('nav.gallery') },
    ],
    resources: [
      { href: "/articles", label: t('nav.articles') },
      { href: "/#contact", label: t('nav.contact') },
      { href: "#", label: t('footer.privacy') },
      { href: "#", label: t('footer.terms') },
    ],
  }

  return (
    <footer className="bg-black text-white py-20 lg:py-28 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <Link href="/#hero" className="inline-block">
              <Image
                src="/assets/icon/ecobus.png"
                alt="ECOBUS logo"
                width={220}
                height={80}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs font-medium tracking-wide">
              Building the future, restoring the past. Excelence in construction since 1999.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-sky-500 hover:text-white hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div className="flex flex-col gap-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                Services
              </h3>
              <ul className="flex flex-col gap-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-zinc-400 transition-colors hover:text-white font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                {t('nav.about')}
              </h3>
              <ul className="flex flex-col gap-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-zinc-400 transition-colors hover:text-white font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 hidden sm:flex">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                Légal
              </h3>
              <ul className="flex flex-col gap-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-zinc-400 transition-colors hover:text-white font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter / Contact Column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">{t('footer.newsletter')}</h3>
              <form className="relative overflow-hidden rounded-xl border border-white/10 focus-within:border-sky-500/50 transition-colors bg-white/5">
                <Input
                  type="email"
                  placeholder={t('footer.placeholder')}
                  className="bg-transparent border-none text-white placeholder:text-zinc-500 h-12 focus-visible:ring-0"
                />
                <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-12 w-12 text-white hover:bg-sky-500 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </Button>
              </form>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <span className="text-sm font-bold tracking-widest">+257 79 66 02 20</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <span className="text-sm font-bold tracking-widest">ecobus18@gmail.com</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">Ni BUJUMBURA-BURUNDI, Mukaza District, Avenue de la Tanzanie no 20</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Ecobus Ltd. {t('footer.rights')}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Select value={locale} onValueChange={(value) => setLocale(value as 'fr' | 'en')}>
              <SelectTrigger className="w-[120px] h-10 rounded-full bg-white/5 border-none text-zinc-400 focus:ring-0">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <span>{locale === 'fr' ? '🇫🇷' : '🇺🇸'}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest">{locale === 'fr' ? 'Français' : 'English'}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-white/10 text-white">
                <SelectItem value="fr">🇫🇷 Français</SelectItem>
                <SelectItem value="en">🇺🇸 English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </footer>
  )
}
