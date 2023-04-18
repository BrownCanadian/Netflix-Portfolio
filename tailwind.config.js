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
      },
      zIndex: {
        '100': '100',
        '110':'110'
      },
      blur: {
        xs: '2px',
      },
      scale: {
        '175': '.98',
      }
    },
  },
  plugins: [ require("tailwindcss-inner-border")],
}

