import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

const articles = [
    {
        id: 1,
        title: "The Future of Sustainable Commercial Construction",
        excerpt: "Discover how new green technologies are reshaping the way we build commercial spaces.",
        image: "/assets/projects/3.jpg",
        date: "April 18, 2026",
        author: "David Harrison",
    },
    {
        id: 2,
        title: "Top 5 Trends in Luxury Residential Architecture",
        excerpt: "From smart homes to open concept concrete designs, here's what's trending this year.",
        image: "/assets/projects/2.jpg",
        date: "April 12, 2026",
        author: "Sarah Jenkins",
    },
    {
        id: 3,
        title: "Understanding Project Management Timelines",
        excerpt: "A deep dive into how we keep large-scale construction projects precisely on schedule.",
        image: "/assets/projects/6.jpg",
        date: "March 29, 2026",
        author: "Michael Roberts",
    },
]

import { useTranslation } from "@/lib/i18n/context"

export function Articles() {
    const { t } = useTranslation()
    return (
        <section id="articles" className="bg-background py-24 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
                    <div className="max-w-2xl flex flex-col gap-5">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('articles.title')}</h2>
                        <p className="text-muted-foreground text-lg">
                            {t('articles.description')}
                        </p>
                    </div>
                    <Button variant="outline" size="lg" className="shrink-0" asChild>
                        <Link href="#articles">
                            {t('articles.viewAll')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <article key={article.id} className="flex flex-col group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-lg">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        <span>{article.author}</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-3 leading-snug group-hover:text-primary transition-colors">
                                    <Link href={`#article-${article.id}`}>
                                        <span className="absolute inset-0 z-10" />
                                        {article.title}
                                    </Link>
                                </h3>
                                <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                                    {t('articles.readMore')}
                                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
