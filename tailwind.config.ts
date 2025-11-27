import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Roboto Condensed", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1959AC",
        primaryDark: "#0546D2",
      },
    },
  },
  plugins: [],
};

export default config;
