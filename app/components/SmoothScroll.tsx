"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 80;
const DURATION = 700;

const easeOutQuint = (progress: number) => 1 - Math.pow(1 - progress, 5);

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frameId: number | null = null;

    const cancelAnimation = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const handleInterruption = () => cancelAnimation();

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) cancelAnimation();
    };

    const handleClick = (event: MouseEvent) => {
      if (prefersReducedMotion.matches) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link || link.target === "_blank") return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      let section: HTMLElement | null;

      try {
        section = document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        // Leave malformed or unsupported fragment links to the browser.
        return;
      }

      if (!section) return;

      event.preventDefault();
      cancelAnimation();

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
          frameId = window.requestAnimationFrame(animate);
        } else {
          frameId = null;
          window.history.replaceState(null, "", hash);
        }
      };

      frameId = window.requestAnimationFrame(animate);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("wheel", handleInterruption, { passive: true });
    window.addEventListener("touchstart", handleInterruption, { passive: true });
    window.addEventListener("pointerdown", handleInterruption, { passive: true });
    window.addEventListener("keydown", handleInterruption);
    prefersReducedMotion.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      cancelAnimation();
      document.removeEventListener("click", handleClick);
      window.removeEventListener("wheel", handleInterruption);
      window.removeEventListener("touchstart", handleInterruption);
      window.removeEventListener("pointerdown", handleInterruption);
      window.removeEventListener("keydown", handleInterruption);
      prefersReducedMotion.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
    };
  }, []);

  return null;
}
