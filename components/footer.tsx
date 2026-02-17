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
            Pyth Network and Fogo Chain maxi building monitoring dashboards and
            onchain analytics. Former Saga Chain ambassador and ex-contributor
            to NodeStake validator operations.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/SCPassion"
              target="_blank"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/KaiCryptohk"
              target="_blank"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
            >
              <Twitter className="h-5 w-5" />
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
