"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/Marquee";

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Ifte — Software Developer & Shopify App Builder";
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".nav-item", { y: -20, opacity: 0, stagger: 0.08, duration: 0.6 })
        .from(".hero-line", { y: 40, opacity: 0, stagger: 0.12, duration: 0.8 }, "-=0.3")
        .from(
          ".hero-portrait-wrap",
          { scale: 0.85, opacity: 0, duration: 1, ease: "power2.out" },
          "-=0.7",
        )
        .from(".hero-bracket", { x: -30, opacity: 0, duration: 0.7 }, "-=0.6")
        .from(".stat-item", { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.3")
        .from(".tech-badge", { scale: 0, opacity: 0, stagger: 0.05, duration: 0.4 }, "-=0.3")
        .from(".analytics-card", { x: 40, opacity: 0, duration: 0.6 }, "-=0.4");

      gsap.to(".hero-portrait-wrap", {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (marqueeRef.current) {
        const w = marqueeRef.current.scrollWidth / 2;
        const marqueeTween = gsap.to(marqueeRef.current, {
          x: -w,
          duration: 25,
          repeat: -1,
          ease: "none",
        });

        let scrollTimeout: ReturnType<typeof setTimeout>;
        const boostSpeed = () => {
          gsap.to(marqueeTween, {
            timeScale: 15,
            duration: 0.2,
            ease: "power2.out",
          });
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            gsap.to(marqueeTween, {
              timeScale: 1,
              duration: 1.2,
              ease: "power2.out",
            });
          }, 300);
        };

        window.addEventListener("wheel", boostSpeed, { passive: true });
        window.addEventListener("touchmove", boostSpeed, { passive: true });

        gsap.from(marqueeRef.current.parentElement, {
          scrollTrigger: {
            trigger: marqueeRef.current.parentElement,
            start: "top 95%",
            end: "top 40%",
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      gsap.from(".service-item", {
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
        x: -40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
      });

      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.value);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 82%" },
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: (i % 2) * 0.1,
          ease: "power3.out",
        });
      });
    }, heroRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.lagSmoothing(1.1);
    };
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee marqueeRef={marqueeRef} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
