"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = ["Home", "About", "Projects", "Contact"];

export function Nav() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#home" className="nav-item font-display font-bold text-xl tracking-tight">
          Ifte<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-item text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-item inline-flex items-center gap-1.5 rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            Let&apos;s talk
          </a>
          <button
            onClick={toggle}
            className="nav-item p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-card transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col items-center gap-6 py-8 text-sm">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-md border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
