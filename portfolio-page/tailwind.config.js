/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "gable-green": {
          50: "#f3faf9",
          100: "#d6f1ed",
          200: "#ade2dc",
          300: "#7cccc5",
          400: "#50b1ab",
          500: "#379591",
          600: "#2a7775",
          700: "#256060",
          800: "#214e4e",
          900: "#1a3636",
          950: "#0d2526",
        },
      },
    },
  },
  plugins: [],
};
