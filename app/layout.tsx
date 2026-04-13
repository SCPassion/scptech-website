import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SCPTECH_OS // SCPassion",
  description:
    "SCPTech is the home of SCPassion, a full-stack builder working across AI workflows, realtime data products, and Web3 infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* CRT scanline overlay */}
        <div className="scanline-overlay" aria-hidden="true" />

        <ScrollProgress />
        <Header />
        <main className="pb-12">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
