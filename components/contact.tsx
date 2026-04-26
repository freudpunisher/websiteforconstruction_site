"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Construction Way", "Metro City, MC 12345"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["(555) 123-4567", "(555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@buildcraft.com", "projects@buildcraft.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon - Fri: 7AM - 6PM", "Sat: 8AM - 2PM"],
  },
]

import { useTranslation } from "@/lib/i18n/context"

export function Contact() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const contactInfoData = [
    {
      icon: MapPin,
      title: t('contact.info.visit'),
      lines: t('contact.info.address') as string[],
      href: t('contact.info.mapLink')
    },
    {
      icon: Phone,
      title: t('contact.info.call'),
      lines: t('contact.info.phones') as string[],
      href: "tel:+25712345678"
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      lines: ["info@ecobus.com", "projects@ecobus.com"],
      href: "mailto:info@ecobus.com"
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      lines: [`${t('contact.info.days.mon_fri')}: 7AM - 6PM`, `${t('contact.info.days.sat')}: 8AM - 2PM`],
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {t('contact.badge')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t('contact.description')}
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.form.title')}</CardTitle>
                <CardDescription>
                  {t('contact.form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{t('contact.form.successTitle')}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {t('contact.form.successMessage')}
                    </p>
                    <Button className="mt-6" onClick={() => setSubmitted(false)}>
                      {t('contact.form.anotherMessage')}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t('contact.form.firstName')}</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t('contact.form.lastName')}</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')}</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                      <Input id="phone" type="tel" placeholder="(555) 000-0000" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="projectType">{t('contact.form.projectType')}</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t('contact.form.projectPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial">{t('projects.categories.commercial')} {t('nav.services')}</SelectItem>
                          <SelectItem value="residential">{t('projects.categories.residential')} {t('nav.services')}</SelectItem>
                          <SelectItem value="renovation">{t('projects.categories.renovation')} & Remodeling</SelectItem>
                          <SelectItem value="interior">Interior Finishing</SelectItem>
                          <SelectItem value="design-build">Design-Build</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="message">{t('contact.form.details')}</Label>
                      <Textarea
                        id="message"
                        placeholder={t('contact.form.detailsPlaceholder')}
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            {contactInfoData.map((info) => {
              const CardContentWrapper = info.href ? "a" : "div"
              return (
                <Card key={info.title} className={info.href ? "transition-colors hover:border-primary/50" : ""}>
                  <CardContentWrapper
                    href={info.href}
                    target={info.href?.startsWith('http') ? "_blank" : undefined}
                    rel={info.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </CardContentWrapper>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
