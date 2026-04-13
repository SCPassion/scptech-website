"use client";

import { useState } from "react";

const faqs = [
  {
    id: "01",
    filename: "01_QUERY_ABOUT_SCPTECH.LOG",
    question: "What is SCPTech?",
    answer:
      "SCPTech is my personal builder brand and project hub. It brings together my work across AI-assisted tooling, realtime data products, and Web3-oriented software.",
    accent: "cyan",
  },
  {
    id: "02",
    filename: "02_QUERY_WORK_TYPE.LOG",
    question: "What kind of work do you do?",
    answer:
      "I build full-stack products end to end — from frontend interfaces and application logic to backend services, deployment loops, and ongoing iteration. A lot of that work touches data-heavy dashboards, automation, and crypto-native workflows.",
    accent: "violet",
  },
  {
    id: "03",
    filename: "03_QUERY_FOCUS_AREAS.LOG",
    question: "What does SCPTech focus on most?",
    answer:
      "The strongest themes right now are AI workflows, market-data interfaces, Web3 integrations, and protocol-adjacent tooling. The specific projects vary, but the thread is always practical execution and usable product design.",
    accent: "cyan",
  },
  {
    id: "04",
    filename: "04_QUERY_ECOSYSTEMS.LOG",
    question: "Which ecosystems or communities have shaped your work?",
    answer:
      "My recent context includes Pyth and Fogo, with earlier community experience as a Saga ambassador and ex-NodeStake community contributor.",
    accent: "violet",
  },
  {
    id: "05",
    filename: "05_QUERY_PORTFOLIO.LOG",
    question: "Where can I see your work?",
    answer:
      "This site highlights a few featured builds, and the broader picture lives on GitHub at SCPassion, where I keep active repositories, experiments, and ongoing product work.",
    accent: "cyan",
  },
];

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 px-6 lg:px-16"
      style={{ background: "rgba(19,19,19,0.3)" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-black mb-2"
            style={{
              fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
              color: "#BC00FF",
            }}
          >
            KNOWLEDGE_BASE{" "}
            <span className="text-white">// ARCHIVES</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <p
              className="text-[10px] tracking-widest"
              style={{ color: "rgba(0,240,255,0.4)", fontFamily: "var(--font-mono), monospace" }}
            >
              /VAR/LOG/SCPTECH/FAQ_DATABASE/*
            </p>
            <p
              className="text-[10px] tracking-widest"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono), monospace" }}
            >
              — Frequently Asked Questions
            </p>
          </div>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openItem === faq.id;
            const accentColor = faq.accent === "violet" ? "#BC00FF" : "#00F0FF";
            const accentRgba =
              faq.accent === "violet"
                ? "rgba(188,0,255,0.15)"
                : "rgba(0,240,255,0.08)";

            return (
              <div
                key={faq.id}
                className="glass-neon overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(14,14,14,0.6)",
                  borderColor: isOpen ? accentColor : "#3B494B",
                  boxShadow: isOpen
                    ? `0 0 16px ${faq.accent === "violet" ? "rgba(188,0,255,0.12)" : "rgba(0,240,255,0.1)"}`
                    : "none",
                }}
              >
                {/* Summary row */}
                <button
                  type="button"
                  className="w-full flex justify-between items-center p-5 text-left cursor-pointer transition-all duration-300"
                  style={{
                    background: isOpen ? accentRgba : "transparent",
                  }}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Folder icon */}
                    <span
                      className="text-lg transition-transform duration-300"
                      style={{
                        color: accentColor,
                        display: "inline-block",
                        transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
                      }}
                    >
                      {isOpen ? "▼" : "▶"}
                    </span>

                    <div>
                      <div
                        className="text-[11px] font-bold tracking-widest mb-1"
                        style={{
                          color: accentColor,
                          fontFamily: "var(--font-mono), monospace",
                        }}
                      >
                        {faq.filename}
                      </div>
                      <div
                        className="text-base font-bold"
                        style={{
                          fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
                          color: isOpen ? "white" : "rgba(255,255,255,0.88)",
                        }}
                      >
                        {faq.question}
                      </div>
                    </div>
                  </div>

                  {/* Plus/minus */}
                  <span
                    className="text-lg font-light ml-4 flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: accentColor,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Expanded content */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className="px-5 pb-5 pt-1"
                    style={{ borderTop: `1px solid ${accentColor}22` }}
                  >
                    <div
                      className="text-[10px] mb-2"
                      style={{
                        color: faq.accent === "violet" ? "rgba(188,0,255,0.4)" : "rgba(0,240,255,0.4)",
                        fontFamily: "var(--font-mono), monospace",
                      }}
                    >
                      ARCHIVE_META: v1.0.0 // CLASSIFICATION: PUBLIC
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "rgba(220,245,255,0.82)",
                        fontFamily: "var(--font-mono), monospace",
                      }}
                    >
                      {faq.answer}
                    </p>
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
