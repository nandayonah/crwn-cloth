import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAS-4K-QIUZYW-RJ1eJR3hPU6vf8OFrbfw",
  authDomain: "crwn-clothing-db-1f2dc.firebaseapp.com",
  projectId: "crwn-clothing-db-1f2dc",
  storageBucket: "crwn-clothing-db-1f2dc.appspot.com",
  messagingSenderId: "912001291058",
  appId: "1:912001291058:web:559bd3d79488ec8d3abd2b",
  measurementId: "G-8NMYPFN4CN",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export const firebaseAuth = firebase.auth()
export const firebaseFirestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export const signInWithGoogle = () => firebaseAuth.signInWithPopup(provider)

export const signInWithEmailAndPassword = (email, password) =>
  firebaseAuth.signInWithEmailAndPassword(email, password)
