"use client";

import { useEffect, useState } from "react";

function useLiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = () => {
      const now = new Date();
      return now.toUTCString().split(" ")[4] + " UTC";
    };
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function Footer() {
  const clock = useLiveClock();

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50 flex flex-wrap justify-between items-center px-4 py-2 gap-2"
      style={{
        background: "#0E0E0E",
        borderTop: "1px solid rgba(59,73,75,0.25)",
        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
        fontSize: "9px",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      {/* Left cluster */}
      <div className="flex items-center gap-5">
        <span style={{ color: "rgba(0,240,255,0.35)" }}>
          ©2024 SCPTECH.TERMINAL // STATUS: ENCRYPTED
        </span>
        <span
          className="hidden md:inline"
          style={{ color: "#00F0FF" }}
        >
          DATA_STREAM: ACTIVE
        </span>
        <span
          className="hidden md:inline"
          style={{ color: "#00F0FF" }}
        >
          LATENCY: 14MS
        </span>
      </div>

      {/* Right cluster */}
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/SCPassion"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          GITHUB
        </a>
        <a
          href="https://x.com/KaiCryptohk"
          target="_blank"
          rel="noreferrer"
          className="footer-link footer-link-violet hidden md:inline"
        >
          X.COM
        </a>
        <span
          className="flex items-center gap-1.5"
          style={{ color: "rgba(0,240,255,0.5)" }}
        >
          <span
            className="w-1 h-1 rounded-full animate-pulse"
            style={{ background: "#00F0FF" }}
          />
          UPLINK_STABLE
        </span>
        {clock && (
          <span style={{ color: "#00F0FF", fontWeight: 700 }}>
            CLOCK: {clock}
          </span>
        )}
      </div>
    </footer>
  );
}
