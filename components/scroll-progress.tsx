"use client";

import { useEffect, useState, useRef } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(
        Math.max((scrollTop / docHeight) * 100, 0),
        100
      );
      setScrollProgress(scrollPercent);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(updateScrollProgress);
      }
    };

    updateScrollProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed top-[64px] left-0 right-0 z-40 h-px"
      style={{ background: "rgba(59,73,75,0.3)" }}
    >
      <div
        className="h-full transition-[width] duration-150 ease-out will-change-transform"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #00F0FF, #BC00FF)",
          boxShadow: "0 0 6px rgba(0,240,255,0.6)",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
