"use client";

import { IconMoon, IconSun } from "./Icons";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const { theme, toggleTheme } = useTheme();
  const iconClass = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center rounded-md p-0 text-foreground transition-colors hover:bg-accent ${
        size === "sm" ? "h-8 w-8" : "h-9 w-9"
      } ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <IconMoon className={iconClass} />
      ) : (
        <IconSun className={iconClass} />
      )}
    </button>
  );
}
