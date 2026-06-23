import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6 text-center">
      <p className="font-display font-bold text-lg">Ifte<span className="text-primary">.</span></p>
      <p className="text-xs text-muted-foreground mt-2">
        Designed and built with care &copy; {new Date().getFullYear()} Ifte
      </p>
      <div className="mt-4 flex justify-center gap-3">
        {[Mail, Github, Linkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Icon className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </footer>
  );
}
