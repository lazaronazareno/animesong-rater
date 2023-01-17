import React from 'react'
import Layout from '@/components/layout/Layout'
import SongDetails from '@/components/layout/SongDetails'
import styled from '@emotion/styled'

import useSongs from '@/hooks/useSongs'

const SongsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--violet);
  width: 100%;
  padding: 3rem 0;
  align-items: center;
`

const Home = () => {
  const { songs } = useSongs('createdAt')

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
