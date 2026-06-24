import { ArrowUpRight } from "lucide-react";

const projects = [
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
    link: "#",
  },
  {
    title: "Ninja Drive",
    tags: ["NestJS", "React", "Docker"],
    desc: "File and asset management platform with role-based access, background processing and a fast React client.",
    code: `@Controller("files")
export class FilesController {
  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.files.store(file);
  }
}`,
    primary: "View project",
    link: "#",
  },
  {
    title: "Teacher Management System",
    tags: ["React", "NestJS", "PostgreSQL"],
    desc: "Admin platform for managing teachers, schedules, classes and reporting with granular permissions.",
    code: `const { data: teachers } = useQuery({
  queryKey: ["teachers", filters],
  queryFn: () => api.listTeachers(filters),
});`,
    primary: "View project",
    link: "#",
  },
  {
    title: "Help Center / FAQ App",
    tags: ["Shopify", "React", "Embedded"],
    desc: "FAQ and help-center app for merchants — searchable categories, theme-aware embeds and a polished editor.",
    code: `<HelpCenter
  categories={categories}
  onSearch={handleSearch}
  theme={shop.theme}
/>`,
    primary: "View project",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 lg:px-12 overflow-hidden">
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
                <h3 className="text-2xl md:text-3xl font-bold">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-card border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">{p.desc}</p>
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                  >
                    {p.primary}
                  </a>
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-1 text-sm border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors"
                  >
                    Live demo <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
                <pre className="relative bg-card border border-border rounded-xl p-5 text-xs md:text-sm font-mono overflow-x-auto shadow-2xl">
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
