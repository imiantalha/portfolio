import Link from "next/link";
import { personal } from "../data/site";

const navigationLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mt-6 flex flex-col items-center justify-center gap-4 border-t border-neutral-900 pt-5 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>

            <a
              href={personal.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Fiverr
            </a>

            <a
              href={personal.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Upwork
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
