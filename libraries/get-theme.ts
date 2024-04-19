import { Theme } from "@/types";

const getTheme = () => {
  let theme: Theme = "light";

  if (typeof window !== "undefined") {
    theme = window.localStorage.getItem("theme") as Theme;
  }

  const isDarkMode = theme === "dark";
  return { isDarkMode };
};

export default getTheme;
