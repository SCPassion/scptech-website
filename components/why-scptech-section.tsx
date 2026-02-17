import { Card } from "@/components/ui/card";
import { BarChart3, Zap, Network, Monitor } from "lucide-react";

export function WhySCPTechSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Pyth-First Analytics",
      description:
        "Monitoring dashboards for Pyth staking and oracle integrity, with real-time visibility into wallet and reserve performance.",
    },
    {
      icon: Monitor,
      title: "Fogo Chain Focus",
      description:
        "Custom dashboards and tooling tailored for Fogo Chain builders and communities that need clear onchain signal.",
    },
    {
      icon: Network,
      title: "Ecosystem Context",
      description:
        "Experience spans former Saga Chain ambassadorship and ex-contributor work with NodeStake validator operations.",
    },
    {
      icon: Zap,
      title: "Real-Time Performance",
      description:
        "High-performance monitoring solutions with low-latency data feeds and instant updates for critical DeFi operations.",
    },
  ];

  return (
    <section id="why-scptech" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl leading-relaxed">
            Why SCPTech?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            A Pyth Network and Fogo Chain maxi building practical tools for
            serious onchain operators
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-2 border-primary/20 bg-card p-6 modern-shadow hover-color-shift transition-all"
            >
              <div className="mb-4 inline-flex rounded-lg border-2 border-primary bg-primary/10 p-4 hover-color-shift">
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
