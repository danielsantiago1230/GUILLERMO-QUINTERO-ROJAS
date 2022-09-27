module.exports = {
  content: [],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-bg': '#D9D7C5',
        'brown-dark': '#261201',
        'brown-button': '#704C13',
        'brown-soft': '#73542F'
      },
      borderWidth: {
        1: '1px'
      },
      fontFamily: {
        grotesk: ['Familjen Grotesk', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        arial: ['Arial','Syabil']
      },
      screens: {
        xs: '540px'
      },
      backgroundImage: {
        'bulding-art': "url('~/public/1.png')",
        'bulding-left': "url('~/public/bulding-UIS.png')",
        'error-page': "url('~/public/Error-404-Page.png')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // require('@tailwindcss/forms')
  ]
}