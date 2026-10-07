"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 80;
const DURATION = 700;

const easeOutQuint = (progress: number) => 1 - Math.pow(1 - progress, 5);

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleClick = (event: MouseEvent) => {
      if (prefersReducedMotion.matches) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link || link.target === "_blank") return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const section = document.querySelector(hash);
      if (!(section instanceof HTMLElement)) return;

      event.preventDefault();

      const start = window.scrollY;
      const targetY = Math.max(
        0,
        window.scrollY + section.getBoundingClientRect().top - HEADER_OFFSET,
      );
      const distance = targetY - start;
      const startedAt = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / DURATION, 1);
        window.scrollTo(0, start + distance * easeOutQuint(progress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          window.history.replaceState(null, "", hash);
        }
      };

      requestAnimationFrame(animate);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
