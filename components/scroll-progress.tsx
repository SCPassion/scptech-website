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

    // Initial calculation
    updateScrollProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-[68px] left-0 right-0 z-40 h-3 bg-primary/10 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary/80 to-accent transition-all duration-300 ease-out will-change-transform"
        style={{
          width: `${scrollProgress}%`,
          transform: "translateZ(0)", // Force hardware acceleration
        }}
      />
    </div>
  );
}
