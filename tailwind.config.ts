import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkpink: "#FF3399",
        darkblue: "#5BA4FF",
      },
      animation: {
        "spin-slow": "spin 6s infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
