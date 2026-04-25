import { Header } from "@/components/header"
import { Articles } from "@/components/articles"
import { Footer } from "@/components/footer"

export default function ArticlesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-12">
                <Articles />
            </main>
            <Footer />
        </div>
    )
}
