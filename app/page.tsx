import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { Gallery } from "@/components/gallery"
import { Articles } from "@/components/articles"
import { Contact } from "@/components/contact"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <Gallery />
        <Articles />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
