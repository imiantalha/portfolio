import Link from "next/link";
import { personal } from "../data/site";

const footerLinks = [
  {
    name: "LinkedIn",
    href: personal.linkedin,
    external: true,
  },
  {
    name: "GitHub",
    href: personal.github,
    external: true,
  },
  {
    name: "Email",
    href: `mailto:${personal.email}`,
    external: false,
  },
  {
    name: "Tel",
    href: personal.phoneHref,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-site flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            {personal.name}
          </Link>
          <p className="mt-1 text-xs text-muted-foreground">
            Software Engineer · PHP / Laravel &amp; Full-Stack Developer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
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
