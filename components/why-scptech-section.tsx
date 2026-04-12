import { Card } from "@/components/ui/card";
import { BarChart3, Zap, Network, Monitor } from "lucide-react";

export function WhySCPTechSection() {
  const features = [
    {
      icon: BarChart3,
      title: "About SCPTech",
      description:
        "SCPTech is the umbrella for my independent work across product engineering, open-source builds, and experiments in AI, realtime data, and crypto tooling.",
    },
    {
      icon: Monitor,
      title: "What I Build",
      description:
        "Most projects sit at the intersection of frontend product surface, backend logic, and execution speed, with a focus on useful interfaces rather than demos for their own sake.",
    },
    {
      icon: Network,
      title: "Core Domains",
      description:
        "Current work spans AI-assisted tooling, market-data products, Web3 integration, and oracle or protocol-adjacent systems.",
    },
    {
      icon: Zap,
      title: "Ecosystem Background",
      description:
        "Community experience includes contributing around Pyth and Fogo, former Saga ambassadorship, and prior community-side contribution with NodeStake.",
    },
  ];

  return (
    <section id="why-scptech" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl leading-relaxed">
            About SCPTech
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            A personal builder brand for practical software, public experiments,
            and protocol-aware product work
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border border-primary/20 bg-card p-6 modern-shadow hover-color-shift transition-colors duration-150 ease-out"
            >
              <div className="mb-4 inline-flex rounded-lg border border-primary/40 bg-primary/10 p-4 hover-color-shift">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
