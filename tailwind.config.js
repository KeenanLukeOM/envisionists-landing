/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.html",
    "./*.js",
    "./public/**/*.html",
    "./public/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#1D0707",
          11: "#180707",
          111: "#120707",
          2: "#7c68c0",
          3: "#e9e6f4",
          4: "#8c7ac7",
          5: "#A699CD",
          100: "#E5E7EB",
          200: "#b0ded2",
          201: "#d7a1d8",
        },
      },
      fontFamily: {
        TheNeue: ["TheNeue", "Arial", "sans-serif"],
        Inter: ["Inter", "Arial", "sans-serif"],
      },
    },
    screens: {
      sm: "360px",
      // => @media (min-width: 640px) { ... }

      md: "640px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1920px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "2560px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "3840px",
    },
  },
  mode: "jit",
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
