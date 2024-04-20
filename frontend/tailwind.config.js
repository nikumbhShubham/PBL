/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardColor: '#171921',
        secCo: '#CBC9F0',
        footerC: '#26408B',
        // Add more custom colors as needed
      },
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
      }    },
  },
  plugins: [],
}