import { HeroSection } from "@/components/hero-section";
import { WhySCPTechSection } from "@/components/why-scptech-section";
import { ProjectsSection } from "@/components/projects-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { FAQSection } from "@/components/faq-section";
import { getGithubProfile, getLatestGithubProjects } from "@/lib/github";

export default async function Home() {
  const [profile, projects] = await Promise.all([
    getGithubProfile(),
    getLatestGithubProjects(4),
  ]);

  return (
    <>
      <HeroSection />
      <WhySCPTechSection />
      <ProjectsSection projects={projects} />
      <PortfolioSection profile={profile} />
      <FAQSection />
    </>
  );
}
