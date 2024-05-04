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
        "defaultBackground": "#272628",
        "defaultRed": "#e5004f",
      },
      height: {
        "productDiv": "151px",
        "productLabel": "47px",
      },
    },
  },
  plugins: [],
};
export default config;
