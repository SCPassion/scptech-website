"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 bg-gradient-to-r from-background/20 via-background/30 to-background/20 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500">
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
            <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-pulse hover:animate-none hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:scale-105 transition-all duration-500 cursor-pointer">
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-primary/10 hover:scale-110 transition-all duration-300"
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
              className="text-base font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-105 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-2 hover:border-primary/50 cursor-pointer px-3 py-2 rounded-lg border border-transparent hover:shadow-lg hover:shadow-primary/20"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-4 pt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleSmoothScroll(e, item.href);
                  setMobileMenuOpen(false);
                }}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground hover-color-shift cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
