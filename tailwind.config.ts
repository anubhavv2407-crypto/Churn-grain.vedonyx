import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F0",
        mango: "#FFD84D",
        coral: "#FF8C73",
        lime: "#B7D96A",
        berry: "#A873D9",
        beige: "#F4E8DA",
        espresso: "#2B211D",
        stone: "#ADA39A",
      },
      fontFamily: {
        display: ["var(--font-poppins)"],
        body: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};

export default config;
