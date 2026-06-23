import { Code2, Container, ShoppingBag } from "lucide-react";

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

export function About() {
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
          <p className="reveal mt-6 text-muted-foreground leading-relaxed">
            I&apos;m a developer, product owner and operator all at once. I build and ship Shopify
            apps end-to-end — engineering, pricing, marketing and customer support — alongside
            full-stack work in Node.js/NestJS, React and TypeScript. I deploy with Docker and
            Coolify on lean VPS setups and care about the boring DevOps that makes products
            stay up.
          </p>

          <div className="reveal mt-10 grid grid-cols-3 gap-6">
            {[
              { v: 25, label: "Projects shipped", suffix: "+" },
              { v: 5, label: "Years building", suffix: "+" },
              { v: 1, label: "Live Shopify app", suffix: "" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold font-display">
                  <span className="stat-num" data-value={s.v}>0</span>
                  <span className="text-primary">{s.suffix}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
