/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontfamily:{
        Poppins:["Poppins", "sans-serif"],
      },
      colors:{
        furnituregreen:"#7DB800",
        furnituregrey:"#F2F2F2"
      }
    },
  },
  plugins: [],
};
