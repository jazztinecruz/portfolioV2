"use client";

import { useTheme } from "@/libraries/contexts/use-theme";
import type { Children } from "@/libraries/types";

type Props = {
  children: Children;
};

const Main = ({ children }: Props) => {
  const { isDarkMode } = useTheme();

  return (
    <main className={`${isDarkMode ? "dark" : "light"}`}>
      <div className="max-w-6xl mx-auto w-full grid gap-8 p-6">{children}</div>
    </main>
  );
};

export default Main;
