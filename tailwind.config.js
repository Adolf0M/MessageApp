/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["dark"],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ],
}

