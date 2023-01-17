import React, { useState, useEffect, useContext } from 'react'

import { FirebaseContext } from '@/firebase'

const useSongs = (order) => {
  const { getSongs } = useContext(FirebaseContext)

  const [songs, setSongs] = useState([])

  const getData = async () => {
    try {
      const response = await getSongs(order)
      setSongs(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    songs
  }
}

export default useSongs
