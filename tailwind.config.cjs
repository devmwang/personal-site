/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#FFFEFD',
        'bright': '#C9C5BD',
        'accent': '#00C8C7',
        'dark': '#303030',
        'background': '#0B0B0C',
      },
    },
  },
  plugins: [],
};
