import { Card } from "@/components/ui/card";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import type { GithubProfile } from "@/lib/github";

type PortfolioSectionProps = {
  profile: GithubProfile;
};

export function PortfolioSection({ profile }: PortfolioSectionProps) {
  const contributor = {
    name: profile.name,
    role: "Full-Stack Developer • AI, Data, and Web3",
    bio: profile.bio,
    avatar: profile.avatarUrl,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "AI Workflows",
      "Realtime Data",
      "Web3 Development",
      `${profile.publicRepos}+ Public Repos`,
    ],
    links: {
      github: profile.githubUrl,
      twitter: profile.twitterUrl,
    },
    stats: `${profile.followers} followers • Austria ↔ Hong Kong • Former Saga ambassador • Ex-NodeStake community contributor`,
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-pretty text-xl text-muted-foreground">
            The person behind SCPTech and the projects linked from this site
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-md border border-primary/30 bg-card p-6 modern-shadow hover-color-shift transition-colors duration-150 ease-out">
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
                  rel="noreferrer"
                  className="rounded border border-transparent p-1.5 text-muted-foreground transition-colors duration-150 ease-out hover:border-primary/40 hover:text-primary cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                  <Github className="h-4 w-4" />
                </a>
                {contributor.links.twitter ? (
                  <a
                    href={contributor.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-transparent p-1.5 text-muted-foreground transition-colors duration-150 ease-out hover:border-primary/40 hover:text-primary cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>

            <h3 className="mb-1 text-2xl font-bold">{contributor.name}</h3>
            <p className="mb-3 text-lg font-bold text-primary">
              {contributor.role}
            </p>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              {contributor.bio}
            </p>
            <p className="mb-4 text-sm font-medium text-primary">
              {contributor.stats}
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
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
