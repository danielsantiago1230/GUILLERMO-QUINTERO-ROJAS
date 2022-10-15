import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyC0NtjD3M4m5ZSKzWNumX5rNcrzrEeOgus',
  authDomain: 'guillermo-quintero-rojas.firebaseapp.com',
  projectId: 'guillermo-quintero-rojas',
  storageBucket: 'guillermo-quintero-rojas.appspot.com',
  messagingSenderId: '274365197423',
  appId: '1:274365197423:web:24032144fccbbb33e5f19a',
  measurementId: 'G-YTX6QS0T1L'
}

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(config) : ''

export const auth = firebase.auth()
