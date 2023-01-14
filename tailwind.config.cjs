/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["lemonade", "night"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
