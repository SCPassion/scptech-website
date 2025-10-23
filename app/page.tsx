import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhySCPTechSection } from "@/components/why-scptech-section"
import { ProjectsSection } from "@/components/projects-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhySCPTechSection />
        <ProjectsSection />
        <PortfolioSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
