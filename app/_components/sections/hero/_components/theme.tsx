"use client";

import { useTheme } from "@/libraries/contexts/use-theme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = () => {
  const { isDarkMode, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(isDarkMode ? "light" : "dark")}>
      {isDarkMode ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
