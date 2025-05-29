/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'],
        sans: ['"Poppins"', "sans-serif"],
      },
      colors: {
        primary: '#00d1b2',
        dark: '#121212',
      },
    },
  },
  plugins: [],
};
