module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#23A1EB"
      },
      container:{
        center: true
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}