"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import { navLinks, personal } from "../data/site";

const sectionIds = navLinks.map(({ href }) => href.slice(1));
const NAV_OFFSET = 120;
const ACTIVE_MARKER_RATIO = 0.35;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollBottom = window.scrollY + window.innerHeight;
        const pageBottom = document.documentElement.scrollHeight;

        if (scrollBottom >= pageBottom - 8) {
          setActiveSection("contact");
          return;
        }

        const marker = window.scrollY + Math.max(
          NAV_OFFSET,
          window.innerHeight * ACTIVE_MARKER_RATIO,
        );

        let current = sections[0]?.id ?? null;

        for (const section of sections) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (marker >= top && marker < bottom) {
            current = section.id;
            break;
          }

          if (marker >= bottom) {
            current = section.id;
          }
        }

        setActiveSection(current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome]);

  const closeMenu = () => setOpen(false);
  const getHref = (href: string) => (isHome ? href : `/${href}`);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav
        className="container-site flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
          onClick={closeMenu}
        >
          {personal.name}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = isHome && activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={() => {
                  if (isHome) setActiveSection(sectionId);
                  closeMenu();
                }}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-1 text-sm transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary transition-all ${
                    isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}

          <ThemeToggle />

          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Open Muhammad Talha resume PDF in a new tab"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle size="sm" />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-border px-4 py-5 md:hidden"
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = isHome && activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={() => {
                  if (isHome) setActiveSection(sectionId);
                  closeMenu();
                }}
                aria-current={isActive ? "location" : undefined}
                className={`border-l-2 pl-3 text-sm ${
                  isActive
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-2 inline-flex w-fit rounded-md border border-border px-4 py-2 text-sm font-medium"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
