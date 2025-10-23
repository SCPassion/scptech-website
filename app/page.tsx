import { HeroSection } from "@/components/hero-section";
import { WhySCPTechSection } from "@/components/why-scptech-section";
import { ProjectsSection } from "@/components/projects-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { FAQSection } from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySCPTechSection />
      <ProjectsSection />
      <PortfolioSection />
      <FAQSection />
    </>
  );
}
