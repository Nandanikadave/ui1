/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: "#DC4A2D",
        orangeBorder: "#FCB4A5",
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
      }
    },
  },
  plugins: [],
}