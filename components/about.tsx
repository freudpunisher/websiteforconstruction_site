"use client"

import Image from "next/image"
import { CheckCircle2, Award, Users, Clock, Shield } from "lucide-react"

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Users, value: "150+", label: "Expert Team Members" },
  { icon: Clock, value: "500+", label: "Projects Completed" },
  { icon: Shield, value: "100%", label: "Client Satisfaction" },
]

const values = [
  "Commitment to quality craftsmanship in every project",
  "Transparent communication throughout the build process",
  "Sustainable building practices and materials",
  "Safety-first approach on every job site",
  "On-time delivery and budget adherence",
  "Long-term relationships with clients and partners",
]

import { useTranslation } from "@/lib/i18n/context"

export function About() {
  const { t } = useTranslation()

  const stats = [
    { icon: Award, value: "25+", label: t('about.stats.years') },
    { icon: Users, value: "150+", label: t('about.stats.team') },
    { icon: Clock, value: "500+", label: t('about.stats.projects') },
    { icon: Shield, value: "100%", label: t('about.stats.satisfaction') },
  ]

  const values = t('about.principles') as string[]

  return (
    <section id="about" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/assets/about/team.jpg"
                alt="Ecobus construction team on site"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3 rounded-xl bg-background p-4 shadow-xl">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center p-3 text-center">
                  <stat.icon className="mb-1 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                {t('about.badge')}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                {t('about.title')}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('about.description')}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('about.team')}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('about.values')}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
