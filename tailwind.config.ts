import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-gray": "#F9F9FB",
        primary: "#2555BB",
      },
      boxShadow: {
        nav: "0px 4px 40px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
