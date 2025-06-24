/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        bayon: ["var(--font-bayon)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1F2125",
        light: "#F6EEE3",
        primary: "#F85654",
        secundary: "#4241B9",
        tertiary: "#FFC441",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      screens: {
        xs: "520px",
        /* 
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        */
        xxl: "1750px",
      },
    },
  },
  plugins: [],
};
