import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-12">
                <Services />
            </main>
            <Footer />
        </div>
    )
}
