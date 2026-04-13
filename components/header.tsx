"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#why-scptech");

  const navItems = [
    { name: "ABOUT", href: "#why-scptech" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT_ME", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => s !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E0E]"
      style={{ borderBottom: "1px solid rgba(59,73,75,0.3)" }}
    >
      <nav className="flex items-center justify-between px-6 py-4 lg:px-10">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-0 group">
          <span
            className="text-xl font-black tracking-[0.15em] text-[#00F0FF]"
            style={{ fontFamily: "var(--font-display), 'Space Grotesk', sans-serif" }}
          >
            SCPTECH
          </span>
          <span
            className="text-xl font-black tracking-[0.15em] text-white/40 group-hover:text-white/60 transition-colors duration-300"
            style={{ fontFamily: "var(--font-display), 'Space Grotesk', sans-serif" }}
          >
            _OS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`text-xs font-bold tracking-[0.2em] transition-all duration-300 cursor-pointer pb-0.5 ${
                activeSection === item.href
                  ? "text-[#00F0FF] border-b border-[#00F0FF]"
                  : "text-[#00F0FF]/50 hover:text-[#00F0FF] border-b border-transparent"
              }`}
              style={{ fontFamily: "var(--font-display), 'Space Grotesk', sans-serif" }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Status indicators (desktop) */}
          <div className="hidden md:flex items-center gap-3 text-[10px] text-[#00F0FF]/30 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              ONLINE
            </span>
          </div>

          {/* Login button */}
          <a
            href="https://github.com/SCPassion"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-[#00F0FF] border border-[#00F0FF]/40 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF] transition-all duration-300 cursor-pointer"
            style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
          >
            GITHUB_LINK
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#00F0FF]/60 hover:text-[#00F0FF] transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span
                className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ borderTop: mobileMenuOpen ? "1px solid rgba(59,73,75,0.3)" : "none" }}
      >
        <div className="px-6 py-4 space-y-1 bg-[#0E0E0E]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`block px-3 py-2.5 text-xs font-bold tracking-[0.2em] cursor-pointer transition-all duration-200 ${
                activeSection === item.href
                  ? "text-[#00F0FF] bg-[#00F0FF]/5 border-l-2 border-[#00F0FF] pl-2"
                  : "text-[#00F0FF]/50 hover:text-[#00F0FF] border-l-2 border-transparent pl-2"
              }`}
              style={{ fontFamily: "var(--font-display), 'Space Grotesk', sans-serif" }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://github.com/SCPassion"
            target="_blank"
            rel="noreferrer"
            className="block mt-4 px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-[#00F0FF] border border-[#00F0FF]/40 text-center hover:bg-[#00F0FF]/10 transition-all duration-200"
          >
            GITHUB_LINK
          </a>
        </div>
      </div>
    </header>
  );
}
