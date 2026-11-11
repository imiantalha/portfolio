"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "scale";

type ScrollRevealProps = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => {
      element.dataset.revealed = "true";
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Keep content visible when animations are disabled or unsupported.
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    // Opt into the hidden/reveal styles only when the observer is available.
    // This keeps the page readable if JavaScript or the observer fails.
    element.dataset.revealReady = "true";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={direction}
      data-revealed="false"
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
