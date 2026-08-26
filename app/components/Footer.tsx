import { personal } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href={personal.fiverr} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Fiverr
          </a>
          <a href={personal.upwork} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Upwork
          </a>
          <span aria-hidden="true" className="hidden text-muted-foreground sm:inline">·</span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
