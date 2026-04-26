"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const categories = ["All", "Commercial", "Residential", "Renovation"]

const projects = [
  {
    id: 1,
    title: "Metropolitan Office Tower",
    category: "Commercial",
    description: "A 25-story modern office complex featuring sustainable design and LEED certification.",
    image: "/assets/projects/1.jpg",
    location: "Downtown Metro",
    year: "2023",
  },
  {
    id: 2,
    title: "Lakeside Luxury Residence",
    category: "Residential",
    description: "Custom 8,000 sq ft waterfront estate with smart home integration and infinity pool.",
    image: "/assets/projects/2.jpg",
    location: "Lake District",
    year: "2023",
  },
  {
    id: 3,
    title: "Heritage Hotel Restoration",
    category: "Renovation",
    description: "Complete restoration of a 1920s boutique hotel preserving historical architecture.",
    image: "/assets/projects/3.jpg",
    location: "Historic Quarter",
    year: "2022",
  },
  {
    id: 4,
    title: "Tech Campus Phase II",
    category: "Commercial",
    description: "150,000 sq ft tech campus expansion with collaborative workspaces and amenities.",
    image: "/assets/projects/4.jpg",
    location: "Innovation Park",
    year: "2023",
  },
  {
    id: 5,
    title: "Mountain View Estates",
    category: "Residential",
    description: "Exclusive community of 12 custom mountain homes with panoramic views.",
    image: "/assets/projects/5.jpg",
    location: "Summit Ridge",
    year: "2022",
  },
  {
    id: 6,
    title: "Industrial Loft Conversion",
    category: "Renovation",
    description: "Transformed vintage warehouse into modern luxury loft apartments.",
    image: "/assets/projects/6.jpg",
    location: "Arts District",
    year: "2023",
  },
]

import { useTranslation } from "@/lib/i18n/context"

export function Projects() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    { key: "All", label: t('projects.categories.all') },
    { key: "Commercial", label: t('projects.categories.commercial') },
    { key: "Residential", label: t('projects.categories.residential') },
    { key: "Renovation", label: t('projects.categories.renovation') },
  ]

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {t('projects.badge')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t('projects.description')}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Badge className="absolute right-3 top-3">{project.category}</Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
