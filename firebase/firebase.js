import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import firebaseConfig from './config'

export const app = initializeApp(firebaseConfig)

export const initFirebase = () => {
  return app
}

const auth = getAuth()

export const register = async (name, email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user

    user.displayName = name
  })
  return user
}
