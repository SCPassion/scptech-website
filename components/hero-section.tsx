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
      {/* Beautiful radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_50%,oklch(0.2_0.12_280)_0%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-primary/10 px-4 py-2 text-sm font-bold text-primary modern-shadow hover-color-shift">
            <Zap className="h-4 w-4" />
            <span>Building the Web3 Future</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Decentralized Technology{" "}
            <span className="text-primary hover-color-shift inline-block">
              Solutions
            </span>
          </h1>

          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            SCPTech pioneers innovative blockchain and Web3 solutions,
            empowering developers and organizations to build the decentralized
            future with cutting-edge technology.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="inline-block"
            >
              <Button
                size="lg"
                className="group border-2 border-primary font-bold text-base modern-shadow hover-color-shift transition-all"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-2 font-bold text-base modern-shadow hover-color-shift transition-all bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center border-2 border-primary/20 rounded-lg p-6 bg-transparent modern-shadow hover-color-shift transition-all">
            <div className="mb-4 rounded-lg border-2 border-primary bg-primary/10 p-4 hover-color-shift">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-base font-bold">Open Source</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Community-driven development with transparent, auditable code
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-2 border-accent/20 rounded-lg p-6 bg-transparent modern-shadow hover-color-shift transition-all">
            <div className="mb-4 rounded-lg border-2 border-accent bg-accent/10 p-4 hover-color-shift">
              <Blocks className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-base font-bold">Blockchain Native</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Built for decentralized networks and distributed systems
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-2 border-primary/20 rounded-lg p-6 bg-transparent modern-shadow hover-color-shift transition-all">
            <div className="mb-4 rounded-lg border-2 border-primary bg-primary/10 p-4 hover-color-shift">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-base font-bold">High Performance</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Optimized for speed and scalability in production environments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
