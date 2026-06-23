const skills = [
  "Shopify",
  "Node.js",
  "NestJS",
  "React",
  "Docker",
  "TypeScript",
  "DevOps",
  "GitHub",
];

export function Marquee({ marqueeRef }: { marqueeRef: React.RefObject<HTMLDivElement | null> }) {
  const items = [...skills, ...skills];
  return (
    <div className="border-y border-border/40 bg-card/30 py-6 overflow-hidden">
      <div ref={marqueeRef} className="flex gap-16 whitespace-nowrap">
        {items.map((s, i) => (
          <span key={i} className="text-muted-foreground font-mono text-sm tracking-widest uppercase flex items-center gap-16">
            {s}
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
