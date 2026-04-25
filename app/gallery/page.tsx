import { Header } from "@/components/header"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-12">
                <Gallery />
            </main>
            <Footer />
        </div>
    )
}
