import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-bold tracking-tight">
              SCP<span className="text-primary">Tech</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            Building the infrastructure for tomorrow's decentralized world.
            Creating innovative Web3 solutions that empower developers and users
            globally.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="text-center text-base text-muted-foreground">
            © {new Date().getFullYear()} SCPTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
