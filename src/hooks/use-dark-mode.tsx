"use client";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(false);

  // Expose a toggle function synchronously so devtools can call it immediately
  try {
    // @ts-ignore
    if (typeof window !== "undefined")
      window.toggleTheme = () => setIsDark((v) => !v);
  } catch (e) {
    /* ignore */
  }

  // On mount, read stored preference or system preference and apply
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // debug
      // console.debug('[useDarkMode] mount, stored theme:', stored);
      if (stored === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
        return;
      }
      if (stored === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
        return;
      }

      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      // ignore
    }
  }, []);

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
