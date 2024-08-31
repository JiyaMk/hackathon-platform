const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Includes all relevant files in src
    "./index.html" // Ensure index.html is also included
  ],
  darkMode: "class", // Enable dark mode using a class
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite", // Custom animation
        shimmer: "shimmer 2s linear infinite", // Shimmer effect animation
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [
    // Plugin to add Tailwind colors as global CSS variables
    function addVariablesForColors({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

      addBase({
        ":root": newVars,
      });
    },
  ],
};
