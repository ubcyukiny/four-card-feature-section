/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#ea5353",
        primaryCyan: "#45d3d3",
        primaryOrange: "#fcaf4a",
        primaryBlue: "#549ef2",
        veryDarkBlue: "#4d4f62",
        grayishBlue: "#a3a5ae",
        veryLightGray: "#fafafa",
      },
      boxShadow: {
        custom: "0 4px 20px rgba(131, 166, 210, 0.5)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
