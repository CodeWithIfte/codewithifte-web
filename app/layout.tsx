import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/lib/providers";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ifte — Software Developer & Shopify App Builder",
  description:
    "Ifte is a software developer specializing in Shopify apps, Node.js/NestJS, React, Docker and DevOps. Builder of CodeConfig Countdown Timer Bar.",
  openGraph: {
    title: "Ifte — Software Developer",
    description: "Shopify apps, Node.js/NestJS, React, Docker, DevOps.",
    type: "website",
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
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
