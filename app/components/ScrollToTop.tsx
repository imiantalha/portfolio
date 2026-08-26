"use client";

import { useEffect, useState } from "react";
import { IconArrowUp } from "./Icons";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
      aria-label="Scroll to top"
    >
      <IconArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
    </button>
  );
}
