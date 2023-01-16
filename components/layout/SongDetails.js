import styled from '@emotion/styled'
import React from 'react'
import { FaComments } from 'react-icons/fa'
import { BiUpArrow } from 'react-icons/bi'

const SongContainer = styled.div`
  display: flex;
  padding: 2rem;
  margin: 1rem auto;
  max-width: 1200px;
  width: 95%;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 4px;
  align-items: center;
  border: 2px solid var(--yellow);

  h1 {
    margin-bottom: 1rem;
  }

  h3, h2 {
    margin: 0;
  }
`

const SongImage = styled.img`
  width: 20rem;
  aspect-ratio: 1/1;
  border-radius: 4px;
`

const Comments = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem 5rem;
  border: 1px solid var(--yellow);

  h3 {
    margin-left: 1rem;
  }
`

const Votes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--yellow);
    padding: 1.5rem 1rem;
`

const SongDetails = ({ song }) => {
  console.log(song)
  const { name, /* url, */ anime, artist, originalName, image, comments, votes, createdAt } = song
  const date = new Date(createdAt)
  const realDate = date.toLocaleString()
  return (
    <SongContainer>
      <div>
        <SongImage alt={name} src={image} />
      </div>
      <div>
        <h3>{anime}</h3>
        <h1>{name}</h1>
        {(artist || originalName) && (
          <h3>{originalName} - {artist}</h3>
        )}
        <Comments>
          <FaComments size={25} />
          <h3>{comments.length} Comentarios</h3>
        </Comments>
        <h3>{realDate}</h3>
      </div>
      <Votes>
        <BiUpArrow />
        <h3>{votes}</h3>
      </Votes>
    </SongContainer>
  )
}

export default SongDetails
