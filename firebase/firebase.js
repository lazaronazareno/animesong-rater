import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'

import firebaseConfig from './config'

const app = initializeApp(firebaseConfig)

export const initFirebase = () => {
  return app
}

export const auth = getAuth()

export const register = async (name, email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password)
  updateProfile(auth.currentUser, {
    displayName: name
  })

  return user
}

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

export const logout = async () => {
  await signOut(auth)
}
