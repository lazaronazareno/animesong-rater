import React from 'react'
import Head from 'next/head'
import '@/styles/globals.css'

import firebase, { FirebaseContext } from '../firebase'
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
        firebase,
        user
      }}
    >
      <Head>
        <title>AniSongs Rater</title>
      </Head>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}
