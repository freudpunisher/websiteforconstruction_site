import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Home, Wrench, PaintBucket, HardHat, Ruler } from "lucide-react"
import { useTranslation } from "@/lib/i18n/context"

const iconMap: Record<string, any> = {
  Building2,
  Home,
  Wrench,
  PaintBucket,
  HardHat,
  Ruler
}

// The local services array is removed in favor of the dictionary-based one in useTranslation

export function Services() {
  const { t } = useTranslation()
  const servicesData = t('services.items') as any[]

  // Define persistent images and icons for the service items
  const serviceAssets = [
    { icon: Building2, image: "/assets/services/commercial.jpg" },
    { icon: Building2, image: "/assets/services/management.jpg" },
    { icon: Home, image: "/assets/services/residential.jpg" },
    { icon: Ruler, image: "/assets/services/design.jpg" },
    { icon: HardHat, image: "/assets/services/management.jpg" },
    { icon: Wrench, image: "/assets/services/renovation.jpg" },
    { icon: PaintBucket, image: "/assets/services/interior.jpg" },
    { icon: Home, image: "/assets/services/commercial.jpg" },
    { icon: Ruler, image: "/assets/services/design.jpg" },
    { icon: HardHat, image: "/assets/services/management.jpg" },
    { icon: Home, image: "/assets/services/residential.jpg" },
  ]

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl text-primary">
            {t('services.title')}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t('services.description')}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const asset = serviceAssets[index] || serviceAssets[0]
            const Icon = asset.icon
            return (
              <Card key={service.title} className="group overflow-hidden transition-all hover:shadow-xl hover:border-primary/50 flex flex-col h-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={asset.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <div className="absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader className="flex-1 pb-4">
                  <CardTitle className="text-2xl mt-2 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
