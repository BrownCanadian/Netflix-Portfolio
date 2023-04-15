/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'netflix':['NetflixSans']
      },
      spacing: {
        '108': '72vh',
      }
    },
  },
  plugins: [ require("tailwindcss-inner-border")],
}

