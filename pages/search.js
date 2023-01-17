import Layout from '@/components/layout/Layout'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import useSongs from '@/hooks/useSongs'
import SongDetails from '@/components/layout/SongDetails'

const SongsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--violet);
  width: 100%;
  padding: 3rem 0;
  align-items: center;
`

const Search = () => {
  const router = useRouter()
  const { query: { q } } = router

  const { songs } = useSongs('createdAt')

  const [result, setResult] = useState([])

  useEffect(() => {
    const searchTerm = q.toLowerCase()
    const filter = songs.filter(song => {
      return (
        song.name.toLowerCase().includes(searchTerm) ||
        song.anime.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm) ||
        song.originalName.toLowerCase().includes(searchTerm)
      )
    })

    setResult(filter)
  }, [q, songs])
  return (
    <>
      <Layout>
        <SongsContainer>
          {result.map(song => (
            <SongDetails key={song.id} song={song} />
          ))}
        </SongsContainer>
      </Layout>
    </>
  )
}

export default Search
