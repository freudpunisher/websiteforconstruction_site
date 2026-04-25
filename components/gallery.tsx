import Image from "next/image"

const galleryImages = [
    { id: 1, src: "/assets/projects/1.jpg", alt: "Construction Project 1" },
    { id: 2, src: "/assets/projects/2.jpg", alt: "Construction Project 2" },
    { id: 3, src: "/assets/projects/3.jpg", alt: "Construction Project 3" },
    { id: 4, src: "/assets/projects/4.jpg", alt: "Construction Project 4" },
    { id: 5, src: "/assets/projects/5.jpg", alt: "Construction Project 5" },
    { id: 6, src: "/assets/projects/6.jpg", alt: "Construction Project 6" },
]

export function Gallery() {
    return (
        <section id="gallery" className="bg-secondary/30 py-24 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-16 text-center text-balance max-w-2xl mx-auto flex flex-col gap-5">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Gallery</h2>
                    <p className="text-muted-foreground text-lg">
                        Explore our latest construction works and ongoing projects from across our portfolio.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image) => (
                        <div key={image.id} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                <span className="text-white font-medium text-lg tracking-wide border border-white px-6 py-2 rounded-full backdrop-blur-sm">View Project</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
