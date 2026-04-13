"use client";

import { useEffect, useRef } from "react";

const bootLines = [
  { text: "[ 0.000000] Initializing kernel...", color: "" },
  { text: "[ 0.124823] Loading AI_MODULE_v2...", color: "" },
  { text: "[ 0.485921] WARNING: Latency spike in Sector 7", color: "accent" },
  { text: "[ 0.512948] Mounting /dev/web3_nodes...", color: "" },
  { text: "[ 0.823910] TCP uplink established @ 14ms", color: "" },
  { text: "[ 1.002934] MEMORY_CHECK: 64GB DDR5 OK", color: "" },
  { text: "[ 1.293842] SECURE_ENCLAVE: ACTIVE", color: "" },
  { text: "[ 1.458291] DECRYPTING_SYSTEM_ASSETS...", color: "violet" },
  { text: "[ 1.829304] STATUS: NOMINAL", color: "" },
  { text: "[ 2.102934] USER_AUTH: SUCCESS", color: "" },
  { text: "[ 2.301847] FULL_STACK_MODULES: LOADED", color: "" },
  { text: "[ 2.499023] AI_WORKFLOW: ACTIVE", color: "" },
  { text: "[ 2.711048] WEB3_ORACLE: CONNECTED", color: "" },
  { text: "[ 0.000000] Initializing kernel...", color: "" },
  { text: "[ 0.124823] Loading AI_MODULE_v2...", color: "" },
  { text: "[ 0.512948] Mounting /dev/web3_nodes...", color: "" },
  { text: "[ 0.823910] TCP uplink established @ 14ms", color: "" },
  { text: "[ 1.002934] MEMORY_CHECK: 64GB DDR5 OK", color: "" },
  { text: "[ 1.293842] SECURE_ENCLAVE: ACTIVE", color: "" },
];

export function HeroSection() {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("active-typing");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-16 cyber-grid overflow-hidden pt-20">

      {/* Floating data particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { top: "18%", left: "8%", delay: "0s" },
          { top: "62%", left: "35%", delay: "2.2s" },
          { top: "28%", left: "82%", delay: "4.1s" },
          { top: "78%", left: "68%", delay: "1.3s" },
          { top: "45%", left: "55%", delay: "3.5s" },
          { top: "12%", left: "60%", delay: "0.8s" },
        ].map((p, i) => (
          <div
            key={i}
            className="data-particle animate-float"
            style={{ top: p.top, left: p.left, animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* Ambient glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(0,240,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── Left: Copy ──────────────────── */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          {/* Role clarity line */}
          <div
            className="mb-4 text-sm font-bold tracking-widest"
            style={{ color: "rgba(0,240,255,0.7)", fontFamily: "var(--font-mono), monospace" }}
          >
            Full-Stack Developer · AI · Realtime Data · Web3
          </div>

          {/* Status ticker */}
          <div className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "#F0FF00", fontFamily: "var(--font-mono), monospace" }}
          >
            <span
              className="w-1.5 h-1.5 animate-pulse"
              style={{ background: "#F0FF00" }}
            />
            <span ref={typingRef} className="typing-text inline-block">
              SYSTEM_PROTOCOL_v4.2.0_ENGAGED
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl xl:text-7xl font-black leading-tight mb-6 text-white"
            style={{ fontFamily: "var(--font-display), 'Space Grotesk', sans-serif" }}
          >
            BUILDING{" "}
            <span style={{ color: "#00F0FF" }}>PRACTICAL</span>
            <br />
            SOFTWARE{" "}
            <span
              style={{
                background: "#00F0FF",
                color: "#000",
                padding: "0 0.2em",
                display: "inline-block",
              }}
            >
              WHERE
            </span>
            <br />
            <span style={{ color: "#00F0FF" }}>AI, DATA</span>
            {" & "}
            <span style={{ color: "#BC00FF" }}>WEB3</span>
            {" MEET"}
          </h1>

          {/* Description */}
          <p
            className="text-lg leading-relaxed max-w-xl mb-10"
            style={{ color: "rgba(220,245,255,0.82)", fontFamily: "var(--font-mono), monospace" }}
          >
            SCPTech is my home base on the web. I build product surfaces,
            backend logic, and fast-moving tools across AI-assisted workflows,
            market-data interfaces, and crypto infrastructure — with community
            experience spanning Pyth, Fogo, Saga, and NodeStake.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-terminal-primary cursor-pointer"
            >
              VIEW_PROJECTS
            </a>
            <a
              href="https://github.com/SCPassion"
              target="_blank"
              rel="noreferrer"
              className="btn-terminal-secondary cursor-pointer"
            >
              GET_IN_TOUCH
            </a>
          </div>
        </div>

        {/* ── Right: Terminal boot ─────────── */}
        <div className="lg:col-span-5 hidden lg:block">
          <div
            className="glass-neon p-4 h-[400px] overflow-hidden relative"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            {/* Terminal chrome */}
            <div
              className="flex justify-between items-center mb-4 pb-2"
              style={{ borderBottom: "1px solid #3B494B" }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span
                className="text-[9px]"
                style={{ color: "rgba(0,240,255,0.35)", fontFamily: "var(--font-mono), monospace" }}
              >
                ROOT@SCPTECH_OS:~/BOOT
              </span>
            </div>

            {/* Scrolling boot log */}
            <div
              className="animate-scroll-code"
              style={{ fontFamily: "var(--font-mono), monospace", fontSize: "10px" }}
            >
              {bootLines.map((line, i) => (
                <p
                  key={i}
                  className="mb-1"
                  style={{
                    color:
                      line.color === "accent"
                        ? "#F0FF00"
                        : line.color === "violet"
                        ? "#BC00FF"
                        : "rgba(0,240,255,0.65)",
                  }}
                >
                  {line.text}
                </p>
              ))}
            </div>

            {/* CPU load indicator */}
            <div
              className="absolute bottom-4 right-4 p-2"
              style={{
                background: "rgba(0,240,255,0.08)",
                border: "1px solid rgba(0,240,255,0.3)",
              }}
            >
              <div
                className="text-[9px] mb-1"
                style={{ color: "rgba(0,240,255,0.6)", fontFamily: "var(--font-mono), monospace" }}
              >
                CPU_LOAD
              </div>
              <div className="w-24 h-1" style={{ background: "#1A1A1A" }}>
                <div
                  className="h-full animate-bar-fill animate-pulse"
                  style={{ background: "#00F0FF" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom status strip ─────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-between items-center px-6 lg:px-16 py-2 gap-4 text-[9px] tracking-wider"
        style={{
          borderTop: "1px solid rgba(59,73,75,0.3)",
          color: "rgba(0,240,255,0.4)",
          fontFamily: "var(--font-mono), monospace",
          background: "rgba(14,14,14,0.8)",
        }}
      >
        <div className="flex items-center gap-6">
          <span>©2024 SCPTECH.TERMINAL // STATUS: ENCRYPTED</span>
          <span className="hidden sm:inline" style={{ color: "#00F0FF" }}>
            DATA_STREAM: ACTIVE
          </span>
          <span className="hidden sm:inline" style={{ color: "#00F0FF" }}>
            LATENCY: 14MS
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>UPLINK_STABLE</span>
          <span style={{ color: "#00F0FF" }}>REGION: EU-WEST-1</span>
        </div>
      </div>
    </section>
  );
}
