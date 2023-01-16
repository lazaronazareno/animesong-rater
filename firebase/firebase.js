import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import firebaseConfig from './config'

const app = initializeApp(firebaseConfig)

export const initFirebase = () => {
  return app
}

export const auth = getAuth()

const db = getFirestore(app)

export const storage = getStorage(app)

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

export const addNewSong = async (newSong) => {
  try {
    const docRef = await addDoc(collection(db, 'songs'), newSong)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
