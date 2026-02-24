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
            <span>Pyth Network & Fogo Chain Focused Builder</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Building for{" "}
            <span className="text-primary">
              Pyth, Fogo, and High-Performance Web3
            </span>
          </h1>

          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            SCPTech builds custom monitoring dashboards for Pyth Network and
            decentralized applications for Fogo. Background includes
            former Saga Chain ambassadorship and prior contribution to
            NodeStake validator operations.
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
                Explore Latest GitHub Builds
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
            <h3 className="text-base font-bold">Monitoring Dashboards</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Oracle and staking analytics focused on actionable signal, wallet
              performance, and ecosystem health.
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-2 border-accent/20 rounded-lg p-6 bg-transparent modern-shadow hover-color-shift transition-colors duration-150 ease-out">
            <div className="mb-4 rounded-lg border-2 border-accent bg-accent/10 p-4 hover-color-shift">
              <Blocks className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-base font-bold">Blockchain Infrastructure</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Decentralized application development for Fogo with a focus on
              usable product experiences and production-ready delivery.
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-2 border-primary/20 rounded-lg p-6 bg-transparent modern-shadow hover-color-shift transition-colors duration-150 ease-out">
            <div className="mb-4 rounded-lg border-2 border-primary bg-primary/10 p-4 hover-color-shift">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-base font-bold">Ecosystem Experience</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Former Saga Chain ambassador and ex-contributor to NodeStake
              validator, with practical cross-ecosystem context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
