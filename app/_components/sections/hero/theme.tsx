"use client";

import { useTheme } from "@/core/contexts/use-theme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
