import { Card } from "@/components/ui/card";
import { BarChart3, Zap, Network, Monitor } from "lucide-react";

export function WhySCPTechSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Comprehensive monitoring dashboards for Oracle Integrity Staking, providing real-time insights into staking performance across multiple wallets.",
    },
    {
      icon: Monitor,
      title: "Custom Monitoring Tools",
      description:
        "Specialized blockchain infrastructure tools for Pyth Network, Saga ecosystem, and emerging Web3 protocols with tailored analytics.",
    },
    {
      icon: Network,
      title: "Multi-Ecosystem Support",
      description:
        "Building tools that work seamlessly across different blockchain networks, from Solana to Cosmos and beyond.",
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
            Specialized Web3 monitoring and analytics tools for blockchain
            ecosystems
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
