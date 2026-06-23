"use client";

import { Code2, Users, BarChart3, Star } from "lucide-react";
import { TestimonialSlider } from "@/components/TestimonialSlider";

const stats = [
  { icon: Code2, value: "25+", label: "Projects" },
  { icon: Users, value: "5+", label: "Years" },
  { icon: BarChart3, value: "10+", label: "Technologies" },
  { icon: Star, value: "4.9", label: "Rating" },
];

const techBadges = [
  { initial: "S", label: "Shopify", color: "#7AB55C" },
  { initial: "N", label: "Node.js", color: "#339933" },
  { initial: "R", label: "React", color: "#61DAFB" },
  { initial: "D", label: "Docker", color: "#2496ED" },
  { initial: "T", label: "TypeScript", color: "#3178C6" },
  { initial: "G", label: "GitHub", color: "#fff" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="hero-bracket text-5xl text-primary/30 font-mono mb-2">&lt;</div>

          <h1 className="hero-line text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]">
            Build With{" "}
            <span className="text-primary">Ifte</span>
          </h1>
          <p className="hero-line mt-3 text-lg text-muted-foreground max-w-xl">
            I build Shopify apps, full-stack products and the DevOps that keeps them running.
            Owner of CodeConfig Countdown Timer Bar.
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
            {techBadges.map((t) => (
              <div
                key={t.initial}
                className="tech-badge w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border"
                style={{
                  backgroundColor: `${t.color}15`,
                  color: t.color,
                  borderColor: `${t.color}30`,
                }}
                title={t.label}
              >
                {t.initial}
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

          <div className="analytics-card absolute -bottom-2 -right-2 lg:-right-6 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-2xl min-w-[180px]">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <BarChart3 className="w-3.5 h-3.5 text-primary" />
              <span>Monthly Reach</span>
            </div>
            <div className="mt-1 text-2xl font-bold font-display">125K+</div>
            <div className="flex items-end gap-[3px] h-8 mt-2">
              {[35, 50, 40, 65, 80, 70, 100].map((h, i) => (
                <div
                  key={i}
                  className="w-[6px] rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: `oklch(0.72 0.18 35 / ${0.3 + h * 0.005})`,
                  }}
                />
              ))}
            </div>
            <div className="mt-1 text-[10px] text-primary font-medium">+2.4K this month</div>
          </div>
        </div>
      </div>
    </section>
  );
}
