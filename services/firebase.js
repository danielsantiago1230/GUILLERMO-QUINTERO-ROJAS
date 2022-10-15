import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

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
const db = firebase.firestore()
const auth = firebase.auth()
export { auth, db }

