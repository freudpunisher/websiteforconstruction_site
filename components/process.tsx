"use client"

import { MessageSquare, Pencil, HardHat, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "We start with a detailed consultation to understand your vision, requirements, budget, and timeline. Our experts assess the project scope and provide initial recommendations.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design & Planning",
    description: "Our design team creates detailed plans and 3D visualizations. We handle permits, engineering, and all pre-construction planning to ensure a smooth build process.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Construction",
    description: "Expert execution with regular progress updates and quality checkpoints. Our skilled crews bring your project to life with precision craftsmanship and attention to detail.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Completion",
    description: "Thorough final inspection and walkthrough to ensure every detail meets our high standards. We deliver on time with complete documentation and warranty coverage.",
  },
]

import { useTranslation } from "@/lib/i18n/context"

export function Process() {
  const { t } = useTranslation()
  const stepsData = t('process.steps') as any[]
  const stepIcons = [MessageSquare, Pencil, HardHat, CheckCircle]

  return (
    <section id="process" className="bg-foreground py-24 text-background lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {t('process.badge')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">
            {t('process.title')}
          </h2>
          <p className="mt-6 text-lg text-background/70 text-pretty">
            {t('process.description')}
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stepsData.map((step, index) => {
            const Icon = stepIcons[index]
            const stepNumber = (index + 1).toString().padStart(2, '0')
            return (
              <div key={stepNumber} className="relative flex flex-col items-center text-center">
                {index < stepsData.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-primary/30 lg:block">
                    <ArrowRight className="absolute -right-2 -top-2 h-5 w-5 text-primary" />
                  </div>
                )}
                <div className="relative z-10 mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary">
                  <Icon className="h-10 w-10 text-primary-foreground" />
                  <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background text-sm font-bold text-foreground">
                    {stepNumber}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-background/70">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
