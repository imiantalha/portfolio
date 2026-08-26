import Link from "next/link";
import { IconGithub, IconLinkedin } from "./Icons";
import { navLinks, personal } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-site flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="text-sm font-semibold text-foreground">
            {personal.name}
          </Link>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Software Engineer specializing in PHP, Laravel, REST APIs, and full-stack application development.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {navLinks
            .filter((link) => link.href !== "#skills")
            .map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <IconGithub className="h-5 w-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <IconLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
