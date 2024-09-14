import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9d8838",
        secondary: "#373737",
        tertiary: "#817546",
        accent: "#fcd32a",
        error: "#d40302",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
