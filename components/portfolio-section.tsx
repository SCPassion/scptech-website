import Image from "next/image";
import type { GithubProfile } from "@/lib/github";

type PortfolioSectionProps = {
  profile: GithubProfile;
};

export function PortfolioSection({ profile }: PortfolioSectionProps) {
  const skills = [
    "REACT.JS",
    "NEXT.JS",
    "TYPESCRIPT",
    "AI_WORKFLOWS",
    "REALTIME_DATA",
    "WEB3_DEV",
    `${profile.publicRepos}x_PUBLIC_REPOS`,
  ];

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div
          className="flex justify-between items-end mb-12 pb-4"
          style={{ borderBottom: "2px solid rgba(188,0,255,0.2)" }}
        >
          <div>
            <h2
              className="text-4xl font-black text-white mb-1"
              style={{ fontFamily: "var(--font-display), 'Space Grotesk', sans-serif" }}
            >
              OPERATOR_PROFILE
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <div
                className="text-[10px] tracking-widest"
                style={{ color: "rgba(188,0,255,0.5)", fontFamily: "var(--font-mono), monospace" }}
              >
                /SYS/USERS/SCPASSION/*
              </div>
              <div
                className="text-[10px] tracking-widest"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono), monospace" }}
              >
                — About Me
              </div>
            </div>
          </div>
          <span
            className="text-[10px] hidden md:block"
            style={{ color: "rgba(188,0,255,0.4)", fontFamily: "var(--font-mono), monospace" }}
          >
            ACCESS: GRANTED
          </span>
        </div>

        <div className="flex justify-center">
          <div
            className="w-full max-w-lg glass-neon glass-neon-violet p-6 relative overflow-hidden"
            style={{ background: "rgba(19,19,19,0.7)" }}
          >

            {/* Ambient violet glow */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 pointer-events-none"
              style={{ background: "rgba(188,0,255,0.06)", filter: "blur(40px)" }}
              aria-hidden="true"
            />

            {/* Profile header row */}
            <div className="flex items-start justify-between mb-5">
              {/* Avatar */}
              <div
                className="w-16 h-16 overflow-hidden"
                style={{ border: "2px solid rgba(188,0,255,0.5)" }}
              >
                <Image
                  src={profile.avatarUrl || "/placeholder.svg"}
                  alt={profile.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Social links */}
              <div className="flex gap-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-social-cyan"
                >
                  GITHUB
                </a>
                {profile.twitterUrl && (
                  <a
                    href={profile.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-social-violet"
                  >
                    X.COM
                  </a>
                )}
              </div>
            </div>

            {/* Name and role */}
            <h3
              className="text-2xl font-black mb-1 text-white"
              style={{ fontFamily: "var(--font-display), 'Space Grotesk', sans-serif" }}
            >
              {profile.name.toUpperCase()}
            </h3>
            <p
              className="text-sm font-bold mb-4 tracking-widest"
              style={{ color: "#BC00FF", fontFamily: "var(--font-mono), monospace" }}
            >
              FULL_STACK_DEV · AI · DATA · WEB3
            </p>

            {/* Bio */}
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(220,245,255,0.82)", fontFamily: "var(--font-mono), monospace" }}
            >
              {profile.bio}
            </p>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-4 py-3 mb-5 text-xs"
              style={{
                borderTop: "1px solid rgba(59,73,75,0.5)",
                borderBottom: "1px solid rgba(59,73,75,0.5)",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              <span style={{ color: "#BC00FF" }}>
                {profile.followers} FOLLOWERS
              </span>
              <span style={{ color: "rgba(0,240,255,0.5)" }}>
                AT: AUSTRIA ↔ HK
              </span>
              <span style={{ color: "rgba(0,240,255,0.5)" }}>
                EX: SAGA_AMBASSADOR
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-[11px] font-bold tracking-widest"
                  style={{
                    border: "1px solid rgba(59,73,75,0.5)",
                    color: "rgba(0,240,255,0.6)",
                    background: "rgba(0,240,255,0.03)",
                    fontFamily: "var(--font-mono), monospace",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact CTA */}
            <div
              className="pt-4"
              style={{ borderTop: "1px solid rgba(59,73,75,0.4)" }}
            >
              <p
                className="text-[11px] mb-3 tracking-widest"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono), monospace" }}
              >
                OPEN TO COLLABORATIONS &amp; OPPORTUNITIES
              </p>
              <div className="flex gap-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-action-ghost"
                  style={{ fontSize: "11px" }}
                >
                  VIEW GITHUB
                </a>
                {profile.twitterUrl && (
                  <a
                    href={profile.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-action-violet"
                    style={{ fontSize: "11px" }}
                  >
                    REACH OUT ON X
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
