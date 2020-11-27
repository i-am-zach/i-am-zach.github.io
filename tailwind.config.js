module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["SF Pro Display", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
