import Image from "next/image";
import type { GithubProject } from "@/lib/github";

type ProjectsSectionProps = {
  projects: GithubProject[];
};

const projectIds = ["PRJ_001", "PRJ_002", "PRJ_003", "PRJ_004"];
const projectAccents = ["cyan", "violet", "cyan", "violet"];

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-16"
      style={{ background: "rgba(19,19,19,0.3)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div
          className="flex justify-between items-end mb-12 pb-4"
          style={{ borderBottom: "2px solid rgba(0,240,255,0.15)" }}
        >
          <div>
            <h2
              className="text-4xl font-black text-white mb-1"
              style={{ fontFamily: "var(--font-display), 'Space Grotesk', sans-serif" }}
            >
              CORE_REPOSITORY
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <div
                className="text-[10px] tracking-widest"
                style={{ color: "rgba(0,240,255,0.5)", fontFamily: "var(--font-mono), monospace" }}
              >
                /VAR/WWW/DEPLOYMENTS/2024/*
              </div>
              <div
                className="text-[10px] tracking-widest"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono), monospace" }}
              >
                — Featured Projects
              </div>
            </div>
          </div>
          <span
            className="text-[10px] hidden md:block"
            style={{ color: "rgba(0,240,255,0.4)", fontFamily: "var(--font-mono), monospace" }}
          >
            ENTRIES_FOUND: {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const accent = projectAccents[i % projectAccents.length];
            const filename = project.title.replace(/\s+/g, "_").toUpperCase();
            const accentColor = accent === "violet" ? "#BC00FF" : "#00F0FF";

            return (
              <div
                key={project.title}
                className={`glass-neon group bg-[#131313]/60 relative overflow-hidden ${
                  accent === "violet" ? "glass-neon-violet" : ""
                }`}
              >
                {/* Project image */}
                <div
                  className="aspect-video w-full overflow-hidden relative"
                  style={{ borderBottom: "1px solid #3B494B" }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Image overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        accent === "violet"
                          ? "linear-gradient(180deg, transparent 60%, rgba(188,0,255,0.15) 100%)"
                          : "linear-gradient(180deg, transparent 60%, rgba(0,240,255,0.1) 100%)",
                    }}
                  />
                  {/* ID tag */}
                  <div
                    className="absolute top-3 right-3 px-2 py-0.5 text-[9px] tracking-widest"
                    style={{
                      background: "rgba(14,14,14,0.8)",
                      border: `1px solid ${accent === "violet" ? "rgba(188,0,255,0.4)" : "rgba(0,240,255,0.3)"}`,
                      color: accentColor,
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    {projectIds[i % projectIds.length]}
                  </div>
                  {/* Beta tag */}
                  {project.isBeta && (
                    <div
                      className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-bold tracking-widest"
                      style={{
                        background: "rgba(240,255,0,0.1)",
                        border: "1px solid rgba(240,255,0,0.5)",
                        color: "#F0FF00",
                        fontFamily: "var(--font-mono), monospace",
                      }}
                    >
                      BETA
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-6">
                  {/* Filename heading */}
                  <h3
                    className="text-xl font-bold mb-0.5"
                    style={{
                      fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
                      color: accentColor,
                    }}
                  >
                    {filename}
                  </h3>
                  {/* Human-readable project name */}
                  <p
                    className="text-sm mb-2"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-mono), monospace" }}
                  >
                    {project.title}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "rgba(220,245,255,0.78)", fontFamily: "var(--font-mono), monospace" }}
                  >
                    {project.description}
                  </p>

                  {/* Beta caution */}
                  {project.isBeta && project.cautionNote && (
                    <p
                      className="text-[10px] mb-5 px-3 py-2 leading-relaxed"
                      style={{
                        color: "rgba(240,255,0,0.7)",
                        border: "1px solid rgba(240,255,0,0.25)",
                        background: "rgba(240,255,0,0.04)",
                        fontFamily: "var(--font-mono), monospace",
                      }}
                    >
                      ⚠ {project.cautionNote}
                    </p>
                  )}

                  {/* Footer row */}
                  <div
                    className="flex justify-between items-center pt-4 mb-5"
                    style={{ borderTop: "1px solid rgba(59,73,75,0.4)" }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: accentColor }}
                      />
                      <span
                        className="text-[9px] tracking-widest"
                        style={{
                          color: "rgba(0,240,255,0.6)",
                          fontFamily: "var(--font-mono), monospace",
                        }}
                      >
                        {project.tags[0]?.toUpperCase() || "CODE"}
                      </span>
                    </div>
                    <span
                      className="text-[9px] tracking-widest"
                      style={{
                        color: accent === "violet" ? "rgba(188,0,255,0.5)" : "rgba(0,240,255,0.4)",
                        fontFamily: "var(--font-mono), monospace",
                      }}
                    >
                      {project.status.toUpperCase().replace(/\s+/g, "_")}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-action-ghost"
                    >
                      VIEW_CODE
                    </a>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={accent === "violet" ? "btn-action-violet" : "btn-action-cyan"}
                      >
                        LAUNCH_NOW
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-action-soft"
                      >
                        OPEN_REPO
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
