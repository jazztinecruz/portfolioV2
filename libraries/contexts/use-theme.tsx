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
  const [theme, setTheme] = useState<Theme>(() => {
    let storedTheme: Theme = "dark";
    if (typeof window !== "undefined") {
      storedTheme = window.localStorage.getItem("theme") as Theme;
    }
    return storedTheme;
  });

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme, window.localStorage]);

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
