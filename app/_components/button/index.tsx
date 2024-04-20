"use client";

import { useTheme } from "@/libraries/contexts/use-theme";
import type { Children } from "@/libraries/types";

type Props = {
  onClick: () => void;
  children: Children;
};

const Button = ({ children, onClick }: Props) => {
  const { isDarkMode } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`${
        isDarkMode ? "light" : "dark"
      } px-4 py-2 rounded-md font-semibold`}>
      {children}
    </button>
  );
};

export default Button;
