"use client";

import Image from "next/image";
import { Code2, Users, BarChart3, Star } from "lucide-react";
import { TestimonialSlider } from "@/components/TestimonialSlider";

const stats = [
  { icon: Code2, value: "25+", label: "Projects" },
  { icon: Users, value: "5+", label: "Years" },
  { icon: BarChart3, value: "10+", label: "Technologies" },
  { icon: Star, value: "4.9", label: "Rating" },
];

const techBadges = [
  { label: "React", color: "#61DAFB", icon: "/icons/react.png" },
  { label: "TypeScript", color: "#3178C6", icon: "/icons/typescript.png" },
  { label: "Tailwind CSS", color: "#06B6D4", icon: "/icons/tailwindcss.webp" },
  { label: "Node.js", color: "#339933", icon: "/icons/nodejs.webp" },
  { label: "NestJS", color: "#E0234E", icon: "/icons/nestjs.webp" },
  { label: "Prisma", color: "#2D3748", icon: "/icons/prisma.svg" },
  { label: "Shopify", color: "#7AB55C" },
  { label: "C++", color: "#00599C", icon: "/icons/c++.png" },
  { label: "Docker", color: "#2496ED", icon: "/icons/docker.png" },
  { label: "GitHub", color: "#fff", icon: "/icons/github.png" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="hero-bracket text-5xl text-primary/30 font-mono mb-2">&lt;</div>

          <h1 className="hero-line text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]">
            Code With{" "}
            <span className="text-primary">Ifte</span>
          </h1>
          <p className="hero-line mt-3 text-lg text-muted-foreground max-w-xl">
            Building scalable web apps, Shopify stores, and WordPress plugins.
            Helping businesses grow with clean, modern code.
          </p>

          <div className="hero-line mt-8 flex flex-wrap gap-6">
            {stats.map((s) => (
              <div key={s.label} className="stat-item flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold font-display">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-line testimonial-card mt-8 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 overflow-hidden">
            <TestimonialSlider />
          </div>

          <div className="hero-line mt-6 flex flex-wrap gap-3">
            {techBadges.map((t, i) => (
              <div
                key={i}
                className="tech-badge w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border overflow-hidden"
                style={{
                  backgroundColor: t.icon ? `${t.color}15` : undefined,
                  color: t.color,
                  borderColor: `${t.color}30`,
                }}
                title={t.label}
              >
                {t.icon ? (
                  <Image
                    src={t.icon}
                    alt={t.label}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                ) : (
                  t.label.charAt(0)
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center py-8">
          <div className="hero-portrait-wrap relative">
            <div className="w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full border-[3px] border-primary/70 p-2.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img
                  src="/portrait.jpg"
                  alt="Portrait of Ifte"
                  width={896}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="analytics-card absolute -bottom-12 lg:-bottom-2 -right-2 lg:-right-6 bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl min-w-[180px] lg:min-w-[220px] p-3 lg:p-5">
            <div className="text-sm lg:text-base font-bold text-foreground">Realtime</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] lg:text-[11px] text-muted-foreground">Updating live</span>
            </div>

            <div className="mt-2 lg:mt-4">
              <div className="text-lg lg:text-2xl font-bold text-foreground">71,310</div>
              <div className="text-[10px] lg:text-[11px] text-muted-foreground">Subscribers</div>
            </div>

            <button className="mt-1.5 lg:mt-2.5 text-[10px] lg:text-[11px] bg-muted text-muted-foreground rounded-full px-2 lg:px-3 py-0.5 lg:py-1 hover:bg-muted/80 transition-colors">
              See live count
            </button>

            <div className="mt-2 lg:mt-4 border-t border-border/40" />

            <div className="mt-1.5 lg:mt-3">
              <div className="text-lg lg:text-2xl font-bold text-foreground">3,471</div>
              <div className="text-[10px] lg:text-[11px] text-muted-foreground">Views · Last 48 hours</div>
            </div>

            <div className="flex items-end gap-[2px] lg:gap-[3px] h-5 lg:h-8 mt-1 lg:mt-2">
              {[20, 35, 25, 45, 60, 40, 70, 55, 80, 65, 90, 75, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: `oklch(0.72 0.18 35 / ${0.5 + h * 0.003})`,
                  }}
                />
              ))}
            </div>

            <div className="flex justify-between mt-0.5 lg:mt-1 text-[9px] lg:text-[10px] text-muted-foreground">
              <span>-48h</span>
              <span>Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
