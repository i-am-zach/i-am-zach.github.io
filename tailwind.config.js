/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/*.{html,md}", "./layouts/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Monda', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
};
