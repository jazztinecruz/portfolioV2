"use client";

import { useTheme } from "@/contexts/use-theme";
import { Children } from "@/types";

type Props = {
  children: Children;
};

const Main = ({ children }: Props) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}>
      {children}
    </div>
  );
};

export default Main;
