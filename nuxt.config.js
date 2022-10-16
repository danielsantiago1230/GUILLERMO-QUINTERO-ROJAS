import fs from 'fs'
import { db,auth } from '../GUILLERMO-QUINTERO-ROJAS/services/firebase'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Guillermo Quintero Rojas',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website about Colombian contemporary artist' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  /**
   * Router settings
   */
  router: {
    middleware: ["authenticated"]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxt/postcss8',
    //https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts'
  ],

  // Google Fonts
  googleFonts: {
    families: {
      Inter: true,
    },
    display: 'swap',
  },
   //  To make cookie-universal-nuxt work for SSR, remember to set `ssr: true` and `target: 'server'`
  ssr: true,
  target: 'server',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'nuxt-i18n'
  ],
  //config i18n
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'english',
        file: 'en.json'
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.json'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  hooks: {
    build: {
      done(builder) {
        builder.nuxt.options.buildDir
        auth.signInWithEmailAndPassword(process.env.NUXT_ENV_FIREBASE_EMAIL, process.env.NUXT_ENV_FIREBASE_PASSWORD).then(() => {
          db.collection('english').doc('english').get().then((response) => {
            fs.writeFile('lang/prueba.json', JSON.stringify(response.data(), null, 2), 'utf-8', (err) => {
              if (err) return console.log('An error happened', err)
              console.log('File fetched from {JSON} Placeholder and written locally!')
            })
          })
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  }
}

