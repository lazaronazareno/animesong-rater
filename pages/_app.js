import React from 'react'
import Head from 'next/head'
import '@/styles/globals.css'

import firebase, { FirebaseContext } from '../firebase'

export default function App ({ Component, pageProps }) {
  const app = firebase
  return (
    <FirebaseContext.Provider
      value={{
        app
      }}
    >
      <Head>
        <title>AniSongs Rater</title>
      </Head>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}
