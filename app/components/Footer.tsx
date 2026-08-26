import { personal } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex flex-nowrap items-center justify-center gap-x-5 whitespace-nowrap text-center overflow-x-auto">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href={personal.fiverr} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground">
            Fiverr
          </a>
          <a href={personal.upwork} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground">
            Upwork
          </a>
          <span aria-hidden="true" className="shrink-0 text-muted-foreground">·</span>
          <p className="shrink-0 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
