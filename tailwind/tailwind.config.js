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
      fontSize:{
        "h2":['48px',{lineHeight: '56px'}]
      },
      fontFamily:{
        body: "'Open Sans', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}