"use client";

import type { Children, Theme } from "@/libraries/types";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

type Props = {
  children: Children;
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme;
    setTheme(storedTheme || "dark");
    setIsHydrated(true);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (isHydrated) {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme, isHydrated]);

  if (!isHydrated) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const isDarkMode = context.theme === "dark";
  return {
    ...context,
    isDarkMode,
  };
};
