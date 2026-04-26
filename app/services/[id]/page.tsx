"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/context"
import { ArrowLeft, CheckCircle2, Building2, Home, Wrench, PaintBucket, HardHat, Ruler } from "lucide-react"

export default function ServiceDetail() {
    const { id } = useParams()
    const { t } = useTranslation()
    const router = useRouter()

    const index = parseInt(id as string)
    const services = t('services.items') as any[]
    const service = services[index]

    if (!service) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Service non trouvé / Service not found</h1>
                <Button className="mt-4" onClick={() => router.push('/services')}>Retour / Back</Button>
            </div>
        )
    }

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

    const asset = serviceAssets[index] || serviceAssets[0]
    const Icon = asset.icon

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-24">
                {/* Service Hero */}
                <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
                    <Image
                        src={asset.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 lg:px-8">
                        <Link
                            href="/services"
                            className="mb-6 flex items-center text-sm font-medium text-white/80 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t('nav.services')}
                        </Link>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl">
                            {service.title}
                        </h1>
                    </div>
                </section>

                {/* Service Content */}
                <section className="py-20 lg:py-28">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid gap-16 lg:grid-cols-3">
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-primary">Détails du Service</h2>
                                </div>
                                <p className="text-xl leading-relaxed text-muted-foreground mb-10">
                                    {service.description}
                                </p>
                                <div className="grid gap-6 sm:grid-cols-2 mt-12 bg-secondary/20 p-10 rounded-3xl border border-primary/5">
                                    {[
                                        "Expertise technique certifiée",
                                        "Respect rigoureux des délais",
                                        "Matériaux de haute qualité",
                                        "Équipe dédiée et professionnelle",
                                        "Accompagnement personnalisé",
                                        "Garantie sur les travaux"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                                <CheckCircle2 className="h-4 w-4" />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Imagery Section */}
                                <div className="mt-20">
                                    <h3 className="text-2xl font-bold mb-8">Galerie du Projet</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative aspect-video rounded-3xl overflow-hidden border">
                                            <Image src="/assets/projects/1.jpg" alt="Gallery image" fill className="object-cover" />
                                        </div>
                                        <div className="relative aspect-video rounded-3xl overflow-hidden border">
                                            <Image src="/assets/projects/2.jpg" alt="Gallery image" fill className="object-cover" />
                                        </div>
                                        <div className="relative aspect-video rounded-3xl overflow-hidden border">
                                            <Image src="/assets/projects/3.jpg" alt="Gallery image" fill className="object-cover" />
                                        </div>
                                        <div className="relative aspect-video rounded-3xl overflow-hidden border">
                                            <Image src="/assets/projects/4.jpg" alt="Gallery image" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <Card className="p-8 border-primary/10 bg-primary/[0.02]">
                                    <h3 className="text-xl font-bold mb-6">Prêt à commencer ?</h3>
                                    <p className="text-muted-foreground mb-8">
                                        Contactez notre équipe dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
                                    </p>
                                    <Button asChild className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/20">
                                        <Link href="/#contact">{t('nav.quote')}</Link>
                                    </Button>
                                </Card>

                                <div className="rounded-3xl border p-8 space-y-6 bg-card shadow-sm">
                                    <h3 className="text-xl font-bold">Pourquoi nous choisir ?</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                            <p className="text-sm">Plus de 25 ans d'expérience dans l'industrie</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                            <p className="text-sm">Engagement envers la qualité et la sécurité</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                            <p className="text-sm">Solutions innovantes et durables</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`rounded-3xl border bg-card text-card-foreground shadow-sm ${className}`}>
            {children}
        </div>
    )
}
