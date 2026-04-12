"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#why-scptech");

  const navItems = [
    { name: "About SCPTech", href: "#why-scptech" },
    { name: "Projects", href: "#projects" },
    { name: "About Me", href: "#portfolio" },
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="/SCP1.jpg"
              alt="SCPTech Logo"
              width={40}
              height={40}
              className="rounded-md border border-border"
            />
            <span className="text-2xl font-semibold tracking-tight text-foreground">
              SCP
              <span className="text-primary">Tech</span>
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-muted/80 transition-colors duration-150 ease-out cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
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
              className={`text-base font-medium transition-colors duration-150 ease-out hover:text-foreground hover:bg-muted/80 cursor-pointer px-3 py-2 rounded-md border focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
                activeSection === item.href
                  ? "text-foreground border-primary/40 bg-muted"
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
        className={`lg:hidden transition-[max-height,opacity,transform] duration-200 ease-out overflow-hidden ${
          mobileMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div
          className={`space-y-1 px-6 pb-4 pt-2 bg-background transition-transform duration-200 ease-out ${
            mobileMenuOpen
              ? "transform translate-y-0"
              : "transform -translate-y-4"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                handleSmoothScroll(e, item.href);
                setMobileMenuOpen(false);
              }}
              className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/80 hover:text-foreground transition-colors duration-150 ease-out cursor-pointer border focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
                activeSection === item.href
                  ? "text-foreground border-primary/40 bg-muted"
                  : "text-foreground/80 border-transparent"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
