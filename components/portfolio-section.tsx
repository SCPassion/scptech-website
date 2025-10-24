import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function PortfolioSection() {
  const contributor = {
    name: "SCP",
    role: "Creator of SCPTech, Pythenian & Pyth Priest",
    bio: "Full-Stack Developer specializing in Typescript ecosystem.",
    avatar: "/pythenianNFT.jpg",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Full-Stack Development",
    ],
    links: {
      github: "https://github.com/SCPassion",
      twitter: "https://x.com/KaiCryptohk",
    },
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Contributor's Portfolio
          </h2>
          <p className="mt-4 text-pretty text-xl text-muted-foreground">
            Meet the creator building the future of Web3
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-md border-2 border-primary/30 bg-card p-6 modern-shadow-lg hover-color-shift transition-all">
            <div className="mb-4 flex items-start justify-between">
              <div className="h-16 w-16 overflow-hidden rounded border-2 border-primary bg-muted">
                <Image
                  src={contributor.avatar || "/placeholder.svg"}
                  alt={contributor.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover pixelated"
                />
              </div>
              <div className="flex gap-2">
                <a
                  href={contributor.links.github}
                  target="_blank"
                  className="rounded border-2 border-transparent p-1.5 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={contributor.links.twitter}
                  target="_blank"
                  className="rounded border-2 border-transparent p-1.5 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            <h3 className="mb-1 text-2xl font-bold">{contributor.name}</h3>
            <p className="mb-3 text-lg font-bold text-primary">
              {contributor.role}
            </p>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              {contributor.bio}
            </p>

            <div className="flex flex-wrap gap-2">
              {contributor.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
