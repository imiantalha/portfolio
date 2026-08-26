"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import {
  IconChevronLeft,
  IconChevronRight,
  IconExternal,
  IconGithub,
} from "./Icons";

export default function FeaturedProjects() {
  const scroller = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateScrollState = () => {
    const node = scroller.current;
    if (!node) return;
    setCanLeft(node.scrollLeft > 0);
    setCanRight(node.scrollLeft < node.scrollWidth - node.clientWidth - 10);
  };

  useEffect(() => {
    updateScrollState();
    const node = scroller.current;
    if (!node) return;

    node.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      node.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByDirection = (direction: "left" | "right") => {
    const node = scroller.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8;
    node.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="bg-background py-12 sm:py-16 md:py-20">
      <div className="container-site">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:px-0 sm:text-base">
            Production Laravel and PHP systems across e-commerce, B2B, HR, and enterprise workflows.
          </p>
        </div>

        <div className="relative">
          {canLeft ? (
            <button
              type="button"
              onClick={() => scrollByDirection("left")}
              className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground sm:flex"
              aria-label="Scroll left"
            >
              <IconChevronLeft className="h-6 w-6" />
            </button>
          ) : null}

          {canRight ? (
            <button
              type="button"
              onClick={() => scrollByDirection("right")}
              className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground sm:flex"
              aria-label="Scroll right"
            >
              <IconChevronRight className="h-6 w-6" />
            </button>
          ) : null}

          <div
            ref={scroller}
            className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth px-1 py-2 pb-4 sm:gap-6"
          >
            {projects.map((project) => {
              const visibleTech = project.technologies.slice(0, 4);
              const extra = project.technologies.length - visibleTech.length;

              return (
                <article
                  key={project.slug}
                  className="w-[300px] flex-shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[350px] md:w-[400px]"
                >
                  <Link href={`/projects/${project.slug}`} className="block">
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                      {project.gallery[0] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.gallery[0].src}
                          alt={project.gallery[0].alt}
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-primary/40">
                          {project.title}
                        </div>
                      )}
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <h3 className="flex-1 text-lg font-semibold sm:text-xl">
                          {project.title}
                        </h3>
                        <span className="flex-shrink-0 whitespace-nowrap rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                          {project.badge}
                        </span>
                      </div>
                      <p className="line-clamp-3 text-sm text-muted-foreground sm:text-base">
                        {project.shortDescription}
                      </p>
                    </div>
                  </Link>

                  <div className="px-4 pb-5 sm:px-5">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {visibleTech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                      {extra > 0 ? (
                        <span className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
                          +{extra}
                        </span>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted"
                        >
                          <IconGithub className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      ) : null}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted"
                        >
                          <IconExternal className="h-3.5 w-3.5" />
                          Live
                        </a>
                      ) : null}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all project case studies
          </Link>
        </p>
      </div>
    </section>
  );
}
