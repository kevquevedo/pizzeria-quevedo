/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        quevedo: {
          bg:             '#0A0A0A',
          surface:        '#141414',
          'surface-light':'#1E1E1E',
          red:            '#E63946',
          gold:           '#F4A127',
          text:           '#F1F1F1',
          muted:          '#A0A0A0',
        },
      },
    },
  },
  plugins: [],
}
