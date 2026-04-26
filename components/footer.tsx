import { useTranslation } from "@/lib/i18n/context"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const { t } = useTranslation()

  const footerLinks = {
    services: [
      { href: "/services", label: t('services.items')[0].title },
      { href: "/services", label: t('services.items')[1].title },
      { href: "/services", label: t('services.items')[2].title },
      { href: "/services", label: t('services.items')[3].title },
      { href: "/services", label: t('services.items')[4].title },
    ],
    company: [
      { href: "/#about", label: t('nav.about') },
      { href: "/#projects", label: t('nav.projects') },
      { href: "/#process", label: t('nav.process') },
      { href: "/gallery", label: t('nav.gallery') },
    ],
    resources: [
      { href: "#", label: "Blog" },
      { href: "#", label: "FAQs" },
      { href: "/articles", label: t('nav.articles') },
      { href: "/#contact", label: t('nav.contact') },
    ],
  }

  return (
    <footer className="border-t bg-foreground text-background">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/70">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/70">
                {t('nav.about')}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/70">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="flex items-center mb-6">
              <div className="flex h-16 w-auto items-center justify-center overflow-hidden">
                <Image
                  src="/assets/icon/ecobus.png"
                  alt="ECOBUS logo"
                  width={180}
                  height={60}
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="mb-6 text-sm text-background/70 max-w-md">
              {t('about.description')}
            </p>
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold">{t('footer.newsletter')}</h3>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t('footer.placeholder')}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button type="submit">
                  <Mail className="h-4 w-4 mr-2" />
                  {t('footer.subscribe')}
                </Button>
              </form>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Ecobus Construction. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-background/50 hover:text-primary">
              {t('footer.privacy')}
            </Link>
            <Link href="#" className="text-sm text-background/50 hover:text-primary">
              {t('footer.terms')}
            </Link>
            <Link href="#" className="text-sm text-background/50 hover:text-primary">
              {t('footer.licenses')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
