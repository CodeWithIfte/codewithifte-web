import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Ninja Drive",
    tags: ["WordPress", "Google Drive", "PHP", "React"],
    desc: "All-in-one Google Drive plugin for WordPress — browse, embed, gallery, media player, file lists, and WooCommerce integration. Used by thousands of sites.",
    code: `// Shortcode example: embed a Google Drive file browser
add_shortcode('ninja_drive_browser', function ($atts) {
  $folderId = $atts['folder'] ?? 'root';
  $files = ninja_drive_list_files($folderId);
  return ninja_drive_render_browser($files);
});`,
    primary: "Live Demo",
    link: "https://plugininja.com/ninja-drive/",
    wp: "https://wordpress.org/plugins/ninja-drive/",
  },
  {
    title: "CodeConfig Countdown Timer Bar",
    tags: ["Shopify", "Node.js", "React", "Billing"],
    desc: "Live Shopify app I own and maintain — countdown timer bars merchants use to drive urgency on storefronts. End-to-end: code, pricing, reviews and support.",
    code: `app.post("/api/timers", async (req, res) => {
  const shop = req.shopify.session.shop;
  const timer = await Timer.create({
    shop,
    endsAt: req.body.endsAt,
    style: req.body.style,
  });
  res.json(timer);
});`,
    primary: "View on Shopify",
    link: "https://apps.shopify.com/codeconfig-countdown-timer-bar",
  },
  {
    title: "Teacher Management System",
    tags: ["React", "NestJS", "PostgreSQL"],
    desc: "Admin platform for managing teachers, schedules, classes and reporting with granular permissions.",
    code: `const { data: teachers } = useQuery({
  queryKey: ["teachers", filters],
  queryFn: () => api.listTeachers(filters),
});`,
    primary: "View site",
    link: "https://masfiqur.bd/",
  },
  {
    title: "CodeConfig Announcement Bar",
    tags: ["Shopify", "React", "Node.js", "Billing"],
    desc: "Add powerful announcement bars to your store in minutes — no code needed. Choose from sticky headers, scrolling marquees, rotating carousels, or animated sliding bars. Display flash sale countdowns, shipping offers, and promo codes. Target by location, page, or schedule. Built with a customizable CTA button to drive clicks and conversions.",
    code: `app.post("/api/bars", async (req, res) => {
  const shop = req.shopify.session.shop;
  const bar = await AnnouncementBar.create({
    shop,
    message: req.body.message,
    style: req.body.style,
    schedule: req.body.schedule,
  });
  res.json(bar);
});`,
    primary: "Shopify App Store",
    link: "https://apps.shopify.com/codeconfig-announcement-bar",
    demo: "https://codeconfig.dev/announcement-bars/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-20 left-0 w-[450px] h-[450px] rounded-full bg-primary/8 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[90px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="reveal text-4xl md:text-6xl font-bold">Projects</h2>
          <div className="reveal mx-auto mt-6 w-px h-12 relative">
            <div className="absolute inset-0 bg-border" />
            <div id="scroll-line-fill" className="absolute top-0 left-0 w-full h-0 bg-primary origin-top" />
            <span id="scroll-line-dot" className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h3 className="text-lg md:text-3xl font-bold">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mt-3 lg:mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] lg:text-xs px-2 lg:px-3 py-0.5 lg:py-1 rounded-full bg-card border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 lg:mt-5 text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md">{p.desc}</p>
                <div className="mt-4 lg:mt-6 flex flex-wrap items-center gap-4 lg:gap-5">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 lg:px-5 py-2 lg:py-2.5 rounded-md text-sm lg:text-base font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                  >
                    {p.primary}
                  </a>
                  <a
                    href={p.wp || p.demo || p.link}
                    className="inline-flex items-center gap-1 text-xs lg:text-sm border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors"
                  >
                    {p.wp ? "WordPress.org" : p.demo ? "Live demo" : "Live demo"} <ArrowUpRight className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
                <pre className="relative bg-card border border-border rounded-xl p-3 lg:p-5 text-[10px] md:text-sm font-mono overflow-x-auto shadow-2xl">
                  <div className="flex gap-1.5 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                  </div>
                  <code className="text-foreground/90">{p.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
