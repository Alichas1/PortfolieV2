import { outfit, ovo } from "next/font/google";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      colors: {
        lighHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["var(--font-outfit)", "sans-serif"],
        Ovo: ["var(--font-ovo)", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
