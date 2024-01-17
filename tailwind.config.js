/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'darkBlue' : '#040814', 
        'darkGrey' : '#13151d'
      },
      height : {
        '650' : '650px'
      }
    },
  },
  plugins: [],
}

