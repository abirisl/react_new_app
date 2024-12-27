/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",

  theme: {
    extend: {
      colors:{
        primary: "#fea928",
        secondary: "#ed8900"
      },
      container:{
        center: true,
        padding:{
          Default: "1rem",
          sm: "3rem"
        }
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

