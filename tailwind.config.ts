/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rao-gray": "#2D2D2D",
        "rao-black": "#191919",
        "rao-blue": "#003EA4",
        "rao-yellow": "#FEB71B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anta: ["Anta", "sans-serif"],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      fontFamily: {
        poppins: ["200", "300", "400", "500", "600", "700"],
      },
    },
  },
};
