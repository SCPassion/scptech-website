const modules = [
  {
    id: "MOD_001",
    icon: "◈",
    title: "WHAT IS SCPTECH",
    tag: "Builder Brand",
    description:
      "SCPTech is my personal brand and project hub — the umbrella for independent builds, open-source work, and experiments across AI, realtime data, and crypto infrastructure.",
    accent: "cyan",
  },
  {
    id: "MOD_002",
    icon: "⬡",
    title: "WHAT I BUILD",
    tag: "Full-Stack",
    description:
      "End-to-end products: frontend interfaces, backend logic, and deployment pipelines. Focus on useful, working software — not prototypes or demos for their own sake.",
    accent: "violet",
  },
  {
    id: "MOD_003",
    icon: "⬢",
    title: "CORE DOMAINS",
    tag: "AI · Data · Web3",
    description:
      "AI-assisted tooling, market-data dashboards, Web3 integrations, and oracle or protocol-adjacent systems. All output-focused, all production-grade.",
    accent: "cyan",
  },
  {
    id: "MOD_004",
    icon: "◉",
    title: "ECOSYSTEM",
    tag: "Pyth · Fogo · Saga",
    description:
      "Community contributor around Pyth and Fogo, former Saga ambassador, ex-NodeStake community contributor. Real ecosystem context, not just surface-level familiarity.",
    accent: "violet",
  },
];

export function WhySCPTechSection() {
  return (
    <section id="why-scptech" className="py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header — human-readable first */}
        <div
          className="mb-12 pb-6"
          style={{ borderBottom: "2px solid rgba(0,240,255,0.15)" }}
        >
          <div className="flex justify-between items-start">
            <div>
              {/* Terminal label — secondary */}
              <div
                className="text-[11px] tracking-[0.25em] mb-2 font-bold"
                style={{ color: "rgba(0,240,255,0.5)", fontFamily: "var(--font-mono), monospace" }}
              >
                // SYSTEM_MODULES &nbsp;·&nbsp; /SYS/SCPTECH/ABOUT/*
              </div>
              {/* Human heading — primary */}
              <h2
                className="text-4xl lg:text-5xl font-black text-white mb-3"
                style={{ fontFamily: "var(--font-display), 'Space Grotesk', sans-serif" }}
              >
                About SCPTech
              </h2>
              {/* Lead sentence */}
              <p
                className="text-base max-w-2xl leading-relaxed"
                style={{ color: "rgba(220,245,255,0.75)", fontFamily: "var(--font-mono), monospace" }}
              >
                A personal builder brand for practical software, public experiments,
                and protocol-aware product work — built by SCPassion.
              </p>
            </div>
            <span
              className="text-[10px] hidden lg:block mt-1 flex-shrink-0"
              style={{ color: "rgba(0,240,255,0.35)", fontFamily: "var(--font-mono), monospace" }}
            >
              MODULES_LOADED: 04
            </span>
          </div>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((mod) => {
            const accentColor = mod.accent === "violet" ? "#BC00FF" : "#00F0FF";
            const accentRgba = mod.accent === "violet"
              ? "rgba(188,0,255,0.15)"
              : "rgba(0,240,255,0.1)";

            return (
              <div
                key={mod.id}
                className={`glass-neon p-7 group bg-[#131313]/60 relative overflow-hidden flex flex-col ${
                  mod.accent === "violet" ? "glass-neon-violet" : ""
                }`}
              >
                {/* ID tag */}
                <div
                  className="absolute top-3 right-3 text-[9px] tracking-widest"
                  style={{ color: `${accentColor}55`, fontFamily: "var(--font-mono), monospace" }}
                >
                  {mod.id}
                </div>

                {/* Icon */}
                <div
                  className="text-4xl mb-4"
                  style={{
                    color: accentColor,
                    textShadow: `0 0 16px ${accentColor}80`,
                  }}
                >
                  {mod.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-sm font-black mb-1 tracking-widest"
                  style={{
                    fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
                    color: accentColor,
                  }}
                >
                  {mod.title}
                </h3>

                {/* Human-readable tag */}
                <div
                  className="text-[11px] font-bold mb-4 tracking-wide"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono), monospace" }}
                >
                  {mod.tag}
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "rgba(220,245,255,0.78)", fontFamily: "var(--font-mono), monospace" }}
                >
                  {mod.description}
                </p>

                {/* Bottom glow line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                  }}
                />

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at 100% 100%, ${accentRgba}, transparent 70%)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
