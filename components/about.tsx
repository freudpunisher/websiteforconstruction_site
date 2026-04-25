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

export function About() {
  return (
    <section id="about" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/assets/about/team.jpg"
                alt="BuildCraft construction team on site"
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
                About BuildCraft
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                Building Excellence Since 1999
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              For over two decades, BuildCraft Construction has been the trusted partner
              for commercial and residential construction projects across the region.
              Our team of 150+ skilled professionals brings expertise, dedication, and
              innovation to every project we undertake.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe that exceptional construction is built on a foundation of trust,
              quality, and clear communication. From the initial consultation to the
              final walkthrough, we work closely with our clients to ensure their vision
              becomes reality.
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
