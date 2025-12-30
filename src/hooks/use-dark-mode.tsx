"use client";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

const STORAGE_KEY = "theme";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored =
        typeof window !== "undefined"
          ? localStorage.getItem(STORAGE_KEY)
          : null;
      if (stored === "dark") return true;
      if (stored === "light") return false;
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    } catch (e) {
      /* ignore */
    }
    return false;
  });

  // Expose a toggle function synchronously so devtools can call it immediately
  try {
    // @ts-ignore
    if (typeof window !== "undefined")
      window.toggleTheme = () => setIsDark((v) => !v);
  } catch (e) {
    /* ignore */
  }

  // On mount, ensure the `dark` class is applied before paint to avoid FOUC/flicker
  useLayoutEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      /* ignore */
    }
  }, [isDark]);

  // Persist whenever value changes
  useEffect(() => {
    try {
      // persist and apply
      localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // debug exposure for testing
      try {
        // @ts-ignore
        window.__isDark = isDark;
        // ensure toggle also updated here
        // @ts-ignore
        window.toggleTheme = () => setIsDark((v) => !v);
      } catch (e) {}
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  const toggle = useCallback(() => setIsDark((v) => !v), []);

  return { isDark, setIsDark, toggle };
}
