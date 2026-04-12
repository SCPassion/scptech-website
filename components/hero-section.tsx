"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Blocks, Zap } from "lucide-react";

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-muted/20" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-primary/10 px-4 py-2 text-sm font-bold text-primary modern-shadow hover-color-shift">
            <Zap className="h-4 w-4" />
            <span>Austria ↔ Hong Kong • Full-Stack Builder</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Building practical software where{" "}
            <span className="text-primary">AI, realtime data, and Web3</span>{" "}
            meet
          </h1>

          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            SCPTech is my home base on the web. I build product surfaces,
            backend logic, and fast-moving tools across AI-assisted workflows,
            market-data interfaces, and crypto infrastructure, with community
            experience spanning Pyth, Fogo, Saga, and NodeStake.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="inline-block cursor-pointer"
            >
              <Button
                size="lg"
                className="group border border-primary font-semibold text-base modern-shadow hover-color-shift transition-colors duration-150 ease-out cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center border-2 border-primary/20 rounded-lg p-6 bg-transparent modern-shadow hover-color-shift transition-colors duration-150 ease-out">
            <div className="mb-4 rounded-lg border-2 border-primary bg-primary/10 p-4 hover-color-shift">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-base font-bold">Full-Stack Execution</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Shipping from interface and product logic through backend
              services, deployment, iteration, and maintenance.
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-2 border-accent/20 rounded-lg p-6 bg-transparent modern-shadow hover-color-shift transition-colors duration-150 ease-out">
            <div className="mb-4 rounded-lg border-2 border-accent bg-accent/10 p-4 hover-color-shift">
              <Blocks className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-base font-bold">AI + Data Products</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Building agent workflows, automation, and market-data surfaces
              that make complex information easier to inspect and act on.
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-2 border-primary/20 rounded-lg p-6 bg-transparent modern-shadow hover-color-shift transition-colors duration-150 ease-out">
            <div className="mb-4 rounded-lg border-2 border-primary bg-primary/10 p-4 hover-color-shift">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-base font-bold">Web3 Context</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Practical experience across protocol-facing workflows, wallets,
              token flows, oracle integrations, and onchain product execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
