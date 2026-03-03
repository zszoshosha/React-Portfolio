/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      /* Custom color palette for consistent theming across all components */
      colors: {
        navy: {
          900: "#0a192f",
          800: "#112240",
          700: "#1d3461",
        },
        slate: {
          light: "#ccd6f6",
          DEFAULT: "#8892b0",
          dark: "#2e323d",
        },
        accent: "#e91e90",
      },
      /* Custom font sizes for better mobile–desktop scaling */
      fontSize: {
        "hero-lg": ["4.5rem", { lineHeight: "1.1" }],
        "hero-sm": ["2.25rem", { lineHeight: "1.2" }],
      },
      /* Custom breakpoints to fine-tune responsiveness */
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
