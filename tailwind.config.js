/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        futura: ["Futura","sans-serif"],
        futuraRegular: ["Futura-Regular", "sans-serif"]
      }
    },
  },
  plugins: [],
}

