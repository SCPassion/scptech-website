"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#why-scptech");

  const navItems = [
    { name: "Why SCPTech", href: "#why-scptech" },
    { name: "Projects", href: "#projects" },
    { name: "Contributor", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 bg-linear-to-r from-background/20 via-background/30 to-background/20 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="/SCP1.jpg"
              alt="SCPTech Logo"
              width={40}
              height={40}
              className="rounded-lg hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-primary/20"
            />
            <span className="text-3xl font-bold tracking-tight bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-pulse hover:animate-none hover:bg-linear-to-r hover:from-primary hover:via-accent hover:to-primary hover:scale-105 transition-all duration-500 cursor-pointer">
              SCP
              <span className="text-primary animate-bounce hover:animate-spin hover:text-accent transition-all duration-500">
                Tech
              </span>
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-primary/10 hover:scale-110 transition-all duration-300 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`text-base font-medium transition-all duration-300 hover:text-primary hover:scale-105 hover:bg-linear-to-r hover:from-primary/10 hover:to-accent/10 hover:border-2 hover:border-primary/50 cursor-pointer px-3 py-2 rounded-lg border hover:shadow-lg hover:shadow-primary/20 ${
                activeSection === item.href
                  ? "text-primary border-primary/60 bg-linear-to-r from-primary/15 to-accent/15"
                  : "text-foreground/80 border-transparent"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          mobileMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div
          className={`space-y-1 px-6 pb-4 pt-2 bg-linear-to-b from-background/95 to-background/90 backdrop-blur-sm transition-all duration-300 ${
            mobileMenuOpen
              ? "transform translate-y-0"
              : "transform -translate-y-4"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                handleSmoothScroll(e, item.href);
                setMobileMenuOpen(false);
              }}
              className={`block rounded-lg px-3 py-2 text-sm font-medium hover:bg-linear-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary hover:scale-105 hover:border-2 hover:border-primary/50 transition-all duration-500 cursor-pointer transform ${
                activeSection === item.href
                  ? "text-primary border border-primary/60 bg-linear-to-r from-primary/15 to-accent/15"
                  : "text-foreground/80 border border-transparent"
              } ${
                mobileMenuOpen
                  ? "translate-x-0 translate-y-0 opacity-100 scale-100"
                  : "translate-x-8 translate-y-2 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${index * 150}ms`
                  : `${(navItems.length - index) * 50}ms`,
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
