/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.html",
    "./*.js",
    "./public/**/*.html",
    "./public/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#1D0707",
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
  },
  mode: "jit",
  plugins: [],
};
