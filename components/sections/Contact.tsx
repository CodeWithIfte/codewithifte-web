"use client";

import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <div className="reveal flex items-center gap-3 text-sm text-primary font-mono uppercase tracking-widest">
            <span className="w-10 h-px bg-primary" /> Contact
          </div>
          <h2 className="reveal mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Have a project?<br />Let&apos;s talk<span className="text-primary">.</span>
          </h2>
          <p className="reveal mt-6 text-muted-foreground max-w-md">
            Shopify app, full-stack product or DevOps clean-up — drop a message and I&apos;ll get
            back within 24 hours.
          </p>
          <div className="reveal mt-8 flex gap-3">
            {[
              { Icon: Mail, href: "mailto:hello@example.com" },
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-11 h-11 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="reveal space-y-6">
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.id}>
              <label className="text-xs text-muted-foreground uppercase tracking-widest">
                {f.label}
              </label>
              <input
                type={f.type}
                required
                className="mt-1 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-widest">
              Message
            </label>
            <textarea
              required
              rows={3}
              className="mt-1 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 resize-none transition-colors"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-md font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/30"
          >
            {sent ? "Sent ✓" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
