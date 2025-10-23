import { Card } from "@/components/ui/card";
import { Shield, Users, Rocket, Globe } from "lucide-react";

export function WhySCPTechSection() {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Built with security at the core, utilizing industry-leading practices and audited smart contracts to ensure your assets are protected.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Powered by a global community of developers, contributors, and enthusiasts working together to shape the future of Web3.",
    },
    {
      icon: Rocket,
      title: "Innovation Focus",
      description:
        "Constantly pushing boundaries with cutting-edge research and development in blockchain technology and decentralized systems.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Creating solutions that transcend borders, enabling financial inclusion and technological empowerment worldwide.",
    },
  ];

  return (
    <section id="why-scptech" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl leading-relaxed">
            Why Choose SCPTech?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            We're building the infrastructure for tomorrow's decentralized world
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
