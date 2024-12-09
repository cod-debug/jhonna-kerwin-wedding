/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'default': "#110703",
        'primary': "#34170D",
        'dark': "#230F08",
        'secondary': "#6E3C19",
        'accent': "#A7795E"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}