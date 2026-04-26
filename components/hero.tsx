"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const highlights = [
  "25+ Years Experience",
  "500+ Projects Completed",
  "Licensed & Insured",
]

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section className="relative overflow-hidden h-screen min-h-[600px] flex items-center">
      {/* Background Carousel */}
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 w-full h-full z-0"
      >
        <CarouselContent className="h-full ml-0">
          {[
            {
              src: "/assets/hero/1.jpg",
              alt: "Modern commercial building under construction",
            },
            {
              src: "/assets/hero/2.jpg",
              alt: "Commercial construction site during golden hour",
            },
            {
              src: "/assets/hero/3.jpg",
              alt: "Luxury residential building exterior finishing",
            },
            {
              src: "/assets/hero/4.jpg",
              alt: "Modern office building interior construction",
            },
          ].map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-screen min-h-[600px]">
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 lg:px-8">
        <div className="max-w-3xl flex flex-col gap-6 text-white pt-16">
          <Badge className="w-fit bg-primary/90 text-primary-foreground hover:bg-primary/90 border-none px-4 py-1 text-sm font-medium">
            Trusted Construction Partner Since 1999
          </Badge>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-balance lg:text-5xl xl:text-7xl text-white">
            Building Your Vision with{" "}
            <span className="text-primary-foreground underline decoration-primary underline-offset-8 decoration-4">Precision & Excellence</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/90 text-pretty lg:text-xl font-medium max-w-2xl">
            From concept to completion, Ecobus Construction delivers exceptional
            commercial and residential construction services. We transform your ideas
            into reality with unmatched craftsmanship and attention to detail.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base shadow-lg hover:scale-105 transition-transform duration-300">
              <Link href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black bg-transparent h-12 px-8 text-base shadow-lg hover:scale-105 transition-transform duration-300">
              <Link href="#projects">View Our Work</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 pt-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="text-base font-semibold text-white drop-shadow-md">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
