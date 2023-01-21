import React from 'react'
import Head from 'next/head'
import '@/styles/globals.css'

import FirebaseContext from '../firebase/context.js'
import { register, login, logout, addNewSong, getSongs, getSongById, updateSongVotes, updateSongComments, deleteSong } from '@/firebase/firebase'
import useAuth from '@/hooks/useAuth'

export default function App ({ Component, pageProps }) {
  console.log('███████╗░█████╗░██████╗░░█████╗░')
  console.log('╚════██║██╔══██╗██╔══██╗██╔══██╗')
  console.log('░░███╔═╝███████║██████╔╝██║░░██║')
  console.log('██╔══╝░░██╔══██║██╔══██╗██║░░██║')
  console.log('███████╗██║░░██║██║░░██║╚█████╔╝')
  console.log('╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░')
  console.log('░░░░░░░░░░github/lazaronazareno░')

  const user = useAuth()
  return (
    <FirebaseContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        addNewSong,
        getSongs,
        getSongById,
        updateSongVotes,
        updateSongComments,
        deleteSong
      }}
    >
      <Head>
        <title>AniSongs Rater</title>
        <meta
          name='description'
          content='Anime Rating Page - Social Media - Rating - Anime Openings - Anime Endings - Anisongs'
        />
        <meta name='author' content='github/lazaronazareno' />
      </Head>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}
