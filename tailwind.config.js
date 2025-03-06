/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B365D', // Navy blue from logo
          light: '#2C4B7C',
          dark: '#132744',
        },
        secondary: {
          DEFAULT: '#F26522', // Orange from logo
          light: '#F48049',
          dark: '#D54E0F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};