"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Pyth Board",
      description:
        "A comprehensive dashboard for tracking Pyth Network OIS (Oracle Integrity Staking) staking statistics across multiple wallets with real-time analytics and performance monitoring.",
      tags: ["TypeScript", "React", "Pyth Network"],
      status: "Active",
      image: "/pythnetwork.png",
      githubUrl: "https://github.com/SCPassion/pyth-board",
      demoUrl: "https://pyth.scptech.xyz/",
    },
    {
      title: "Saga Portfolio",
      description:
        "A mock portfolio inspection site for Saga Uniswap chainlet, providing AMM monitoring and portfolio analytics for the Saga blockchain ecosystem.",
      tags: ["JavaScript", "Saga", "AMM"],
      status: "Active",
      image: "/saga.png",
      githubUrl: "https://github.com/SCPassion/saga-profolio",
      demoUrl: "https://saga.scptech.xyz/",
    },
    {
      title: "Ecommerce App",
      description:
        "A modern ecommerce web application built with Next.js, TypeScript, and Tailwind CSS, showcasing full-stack development capabilities and modern web technologies.",
      tags: ["TypeScript", "Next.js", "Tailwind CSS"],
      status: "Active",
      image: "/ecommerce.png",
      githubUrl: "https://github.com/SCPassion/ecommerce-app",
      demoUrl: "https://ecommerce.scptech.xyz/",
    },
    {
      title: "VanLife",
      description:
        "VanLife is a modern web application designed to provide users with a seamless experience for exploring and renting vans, featuring responsive design and user-friendly interface.",
      tags: ["JavaScript", "React", "CSS"],
      status: "Active",
      image: "/vanlife.png",
      githubUrl: "https://github.com/SCPassion/vanlife",
      demoUrl: "https://vanlife.scptech.xyz/",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Projects & Tools
          </h2>
          <p className="mt-4 text-pretty text-xl text-muted-foreground">
            Web3 monitoring tools, DeFi protocols, and blockchain infrastructure
            solutions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden border-2 border-border bg-card modern-shadow-lg hover-color-shift transition-all"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted border-b-2 border-border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover pixelated"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="rounded-lg border-2 border-primary bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                    {project.status}
                  </span>
                </div>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-border bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-2 font-bold modern-shadow hover-color-shift transition-all bg-transparent cursor-pointer"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 border-2 border-primary font-bold modern-shadow hover-color-shift transition-all cursor-pointer"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
