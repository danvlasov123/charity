/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', "sans-serif"],
    },
    colors: {
      grey: "#8997A3",
      red: "#C7181C",
      error: "#FF6060",
      white: "#fff",
      black: "#000",
      "bg-grey": "#DFDFDF80",
      "light-grey": "#BEBEBE",
      "light-grey-2": "#EFEFEF",
      blue: "#109AC9",
      green: "#00C45A",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
