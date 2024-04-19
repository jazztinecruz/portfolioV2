"use client";

import { useTheme } from "@/contexts/use-theme";

const ThemeSwitcher = () => {
  const { isDarkMode, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(isDarkMode ? "light" : "dark")}>
        switch
      </button>
    </div>
  );
};

export default ThemeSwitcher;