"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2, Container, ShoppingBag, User, Phone, Mail, CalendarDays, GraduationCap, MapPin, Briefcase } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify App Development",
    desc: "Public & custom apps, billing, embedded admin UIs.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Apps",
    desc: "React + Node.js/NestJS products from idea to production.",
  },
  {
    icon: Container,
    title: "DevOps & Deployment",
    desc: "Docker, Coolify, VPS tuning, CI/CD and SSH workflows.",
  },
];

const tabs = ["Personal Info", "Qualifications", "Skills"];

const personalInfo = [
  { icon: User, label: "Name", value: "Ifte" },
  { icon: Phone, label: "Phone", value: "+880 1700 000000" },
  { icon: Mail, label: "Email", value: "hello@codewithifte.com" },
  { icon: CalendarDays, label: "Date of Birth", value: "01 January 2000" },
  { icon: GraduationCap, label: "Education", value: "BSc in Computer Science" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
];

export function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="services-grid space-y-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-item flex gap-4 items-start border-l-2 border-primary pl-6 py-2 hover:translate-x-1 transition-transform"
            >
              <div className="p-3 rounded-lg bg-card border border-border">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="reveal text-4xl md:text-5xl font-bold">About me</h2>

          <div className="reveal mt-8 flex bg-card rounded-full p-1 border border-border w-fit">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 0 && (
            <div className="reveal mt-8">
              <h3 className="text-2xl font-bold">MERN Stack Developer</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I&apos;m a developer, product owner and operator all at once. I build and ship Shopify
                apps end-to-end — engineering, pricing, marketing and customer support — alongside
                full-stack work in Node.js/NestJS, React and TypeScript.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
                {personalInfo.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                      <item.icon className="w-3.5 h-3.5 text-primary" />
                      {item.label}
                    </div>
                    <p className="mt-1 text-foreground font-medium">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="text-primary text-sm font-semibold uppercase tracking-wider">Language Skill</h4>
                <p className="mt-2 text-foreground font-medium">Bangla, English</p>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="reveal mt-8">
              <h3 className="text-2xl font-bold">My Awesome Journey</h3>

              <div className="mt-8 grid md:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
                    <Briefcase className="w-4 h-4" />
                    Experience
                  </div>
                  <div className="space-y-8">
                    <div className="relative pl-6 before:absolute before:left-[3px] before:top-2 before:h-[calc(100%+2rem)] before:w-px before:bg-border">
                      <span className="absolute left-0 top-2 w-[7px] h-[7px] rounded-full bg-primary" />
                      <h4 className="text-base font-bold text-foreground">Foundation Engineering Solution</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">IT-CoOrdinaryator</p>
                      <p className="text-sm text-foreground font-medium mt-2">May 2023 - Sep 2023</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </div>
                  <div className="space-y-8">
                    <div className="relative pl-6 before:absolute before:left-[3px] before:top-2 before:h-[calc(100%+2rem)] before:w-px before:bg-border">
                      <span className="absolute left-0 top-2 w-[7px] h-[7px] rounded-full bg-primary" />
                      <h4 className="text-base font-bold text-foreground">Rajshahi Polytechnic Institute</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">Diploma In Engineering</p>
                      <p className="text-sm text-foreground font-medium mt-2">2020 - Present</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="reveal mt-8">
              <h3 className="text-2xl font-bold">What I Use Everyday</h3>

              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="text-primary text-sm font-semibold uppercase tracking-wider">Skills</h4>
                  <div className="mt-4 space-y-5">
                    <div>
                      <p className="text-foreground font-semibold">HTML, CSS, Javascript, Tailwind, React</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Front end development</p>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Node Js, Express Js, MongoDB, Mongoose</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Backend development</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-primary text-sm font-semibold uppercase tracking-wider">Tools</h4>
                  <div className="mt-4 flex gap-4">
                    {[
                      { src: "/icons/vs-code.webp", alt: "VS Code" },
                      { src: "/icons/figma.webp", alt: "Figma" },
                      { src: "/icons/git.png", alt: "Git" },
                      { src: "/icons/wordpress.png", alt: "WordPress" },
                    ].map((tool) => (
                      <div
                        key={tool.alt}
                        className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center"
                        title={tool.alt}
                      >
                        <Image src={tool.src} alt={tool.alt} width={22} height={22} className="object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
