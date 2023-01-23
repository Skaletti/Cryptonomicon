/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: { content: ["./public/**/*.html","./src/**/*.vue"] },
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
