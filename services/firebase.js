import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const config = {
  apiKey: process.env.NUXT_ENV_FIREBASE_APIKEY,
  authDomain: process.env.NUXT_ENV_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NUXT_ENV_FIREBASE_PROJECTID,
  storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NUXT_ENV_FIREBASE_APPID,
  measurementId: process.env.NUXT_ENV_FIREBASE_MEASUREMENTID
}

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(config) : ''

export const auth = firebase.auth()
