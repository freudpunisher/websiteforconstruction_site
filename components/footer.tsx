import Link from "next/link"
import { HardHat, Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  services: [
    { href: "#services", label: "Commercial Construction" },
    { href: "#services", label: "Residential Construction" },
    { href: "#services", label: "Renovation & Remodeling" },
    { href: "#services", label: "Interior Finishing" },
    { href: "#services", label: "Design-Build" },
  ],
  company: [
    { href: "#about", label: "About Us" },
    { href: "#projects", label: "Our Projects" },
    { href: "#process", label: "Our Process" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#", label: "Careers" },
  ],
  resources: [
    { href: "#", label: "Blog" },
    { href: "#", label: "FAQs" },
    { href: "#", label: "Safety Guidelines" },
    { href: "#", label: "Sustainability" },
    { href: "#contact", label: "Contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
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
                Company
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
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <HardHat className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">BuildCraft</span>
            </div>
            <p className="mb-6 text-sm text-background/70 max-w-md">
              Building excellence since 1999. We&apos;re committed to delivering exceptional
              construction services with integrity, quality, and innovation.
            </p>
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold">Subscribe to Our Newsletter</h3>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button type="submit">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
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
            &copy; {new Date().getFullYear()} BuildCraft Construction. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-background/50 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-background/50 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-background/50 hover:text-primary">
              Licenses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
