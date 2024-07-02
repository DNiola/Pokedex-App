/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './node_modules/@ionic/angular/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#d3e3fd',
      },
    },
  },
  plugins: [],
}

