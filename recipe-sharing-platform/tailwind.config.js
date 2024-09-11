/** @type {import('tailwindcss').Config} */
/* In your tailwind.config.js, ensure that your purge paths are set */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        green: {
          500: '#34D399',
          600: '#059669',
        },
      },
    },
  },
  plugins: [],
};
