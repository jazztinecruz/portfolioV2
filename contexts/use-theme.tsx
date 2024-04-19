"use client";

import { Children, Theme } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<{
  theme: Theme;
  handleTheme: (theme: Theme) => void;
} | null>(null);

type Props = {
  children: Children;
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(() => {
    let storedTheme;
    if (typeof window !== "undefined") {
      storedTheme = window.localStorage.getItem("theme");
    }
    return storedTheme ? (storedTheme as Theme) : "light";
  });

  const handleTheme = (theme: Theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
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
    isDarkMode,
    setTheme: context.handleTheme,
  };
};
