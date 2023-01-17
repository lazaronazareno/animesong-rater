import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { getFirestore, collection, addDoc, query, orderBy, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
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

export const getSongs = async (order) => {
  const songsRef = await collection(db, 'songs')
  const q = await query(songsRef, orderBy(order, 'desc'))

  const snapshot = await getDocs(q)

  const response = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  })

  return response
}

export const getSongById = async (id) => {
  const songRef = await doc(db, 'songs', id)
  const q = await getDoc(songRef)

  let response = null

  if (q.exists()) {
    response = q.data()
  } else {
    console.log('id inexistente')
  }

  return response
}

export const updateSongVotes = async (id, newVotes, newUserVotes) => {
  const songRef = await doc(db, 'songs', id)
  console.log(songRef)

  await updateDoc(songRef, {
    votes: newVotes,
    userVotes: newUserVotes
  })
}

export const updateSongComments = async (id, newComments) => {
  const songRef = await doc(db, 'songs', id)
  console.log(songRef)

  await updateDoc(songRef, {
    comments: newComments
  })
}

export const deleteSong = async (id) => {
  await deleteDoc(doc(db, 'songs', id))
}
