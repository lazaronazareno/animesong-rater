import React, { useContext, useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import SongDetails from '@/components/layout/SongDetails'
import styled from '@emotion/styled'

import { FirebaseContext } from '@/firebase'

const SongsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--violet);
  width: 100%;
  padding: 3rem 0;
  align-items: center;
`

const Home = () => {
  const { getSongs } = useContext(FirebaseContext)

  const [songs, setSongs] = useState([])

  const getData = async () => {
    const response = await getSongs()
    setSongs(response)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <Layout>
        <SongsContainer>
          {songs.map(song => (
            <SongDetails key={song.id} song={song} />
          ))}
        </SongsContainer>
      </Layout>
    </>
  )
}

export default Home
