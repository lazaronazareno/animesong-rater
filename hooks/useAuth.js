import React, { useState, useEffect } from 'react'
import { auth } from '@/firebase/firebase'

const useAuth = () => {
  const [userAuth, setUserAuth] = useState(null)

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserAuth(user)
      } else {
        setUserAuth(null)
      }
    })
    return () => unsuscribe()
  }, [])

  return userAuth
}

export default useAuth
