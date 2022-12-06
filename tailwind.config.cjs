/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "2rem",
    },

    extend: {
      colors: {
        juan: "red",
      },
    },
  },
  plugins: [],
};
