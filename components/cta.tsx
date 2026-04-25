import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground lg:px-16 lg:py-20">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/90 text-pretty">
              Let&apos;s discuss your project and discover how BuildCraft can turn your
              vision into reality. Get your free consultation today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link href="tel:5551234567">
                  <Phone className="mr-2 h-4 w-4" />
                  (555) 123-4567
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary-foreground/10" />
        </div>
      </div>
    </section>
  )
}
