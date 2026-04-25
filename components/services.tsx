import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Home, Wrench, PaintBucket, HardHat, Ruler } from "lucide-react"

const services = [
  {
    icon: Building2,
    image: "/assets/services/commercial.jpg",
    title: "Commercial Construction",
    description: "Full-service commercial construction including office buildings, retail spaces, warehouses, and industrial facilities. We deliver projects on time and within budget.",
  },
  {
    icon: Home,
    image: "/assets/services/residential.jpg",
    title: "Residential Construction",
    description: "Custom home building and residential developments tailored to your lifestyle. From luxury estates to modern family homes, we bring your vision to life.",
  },
  {
    icon: Wrench,
    image: "/assets/services/renovation.jpg",
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our comprehensive renovation services. Kitchen remodels, bathroom upgrades, and complete home transformations.",
  },
  {
    icon: PaintBucket,
    image: "/assets/services/interior.jpg",
    title: "Interior Finishing",
    description: "Expert interior finishing including drywall, painting, flooring, and trim work. We ensure every detail meets the highest standards of quality.",
  },
  {
    icon: HardHat,
    image: "/assets/services/management.jpg",
    title: "Project Management",
    description: "End-to-end project management ensuring seamless coordination of all trades, timelines, and budgets. Your single point of contact for stress-free building.",
  },
  {
    icon: Ruler,
    image: "/assets/services/design.jpg",
    title: "Design-Build Services",
    description: "Streamlined design-build approach combining architectural design and construction under one roof. Faster delivery and cohesive project execution.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">
            Comprehensive Construction Services
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            From ground-up construction to renovations, we offer a full range of services
            to meet your building needs with excellence and precision.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group overflow-hidden transition-all hover:shadow-xl hover:border-primary/50 flex flex-col h-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <service.icon className="h-6 w-6" />
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
          ))}
        </div>
      </div>
    </section>
  )
}
