module.exports = {
  content: [],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-bg': '#D9D7C5',
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
        'plane-2': "url('~/public/background-plane-2.png')"
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