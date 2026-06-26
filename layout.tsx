import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AetherData — Autonomous AI Data Automation Platform",
  description: "Deploy self-healing pipelines, intelligent schema evolution, and cognitive event routing at sub-millisecond speeds. The high-performance SaaS platform built for modern engineering teams.",
  keywords: ["AI data automation", "autonomous pipeline", "schema evolution", "event routing", "SaaS data ingestion"],
  authors: [{ name: "AetherData Team" }],
  openGraph: {
    title: "AetherData — Autonomous AI Data Automation Platform",
    description: "Deploy self-healing pipelines, intelligent schema evolution, and cognitive event routing at sub-millisecond speeds.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AetherData — Autonomous AI Data Automation Platform",
    description: "Deploy self-healing pipelines, intelligent schema evolution, and cognitive event routing at sub-millisecond speeds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030303] text-zinc-100 font-sans selection:bg-neon-purple/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
