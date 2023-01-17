import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { FaComments } from 'react-icons/fa'
import { BiUpArrow } from 'react-icons/bi'
import Link from 'next/link'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { es } from 'date-fns/locale'

const SongContainer = styled.div`
  display: flex;
  padding: 2rem;
  margin: 1rem auto;
  max-width: 1200px;
  width: 95%;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 12px;
  align-items: center;

  h1 {
    margin-bottom: 1rem;
    color: black;
  }

  h3, h2 {
    margin: 0;
  }
`

const SongInfo = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;

  h1:hover {
    color: var(--violet);
    cursor: pointer;
  }

  h3 {
    margin-bottom: auto;
  }
`

const SongImage = styled.img`
  width: 20rem;
  aspect-ratio: 1/1;
  border-radius: 8px;
`

const Comments = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--yellow);
  }
`

const Votes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: var(--yellow);
    border-radius: 8px;
    padding: 7.5rem 1rem;
`

const SongDetails = ({ song }) => {
  const { id, name, /* url, */ anime, artist, description, originalName, image, comments, votes, createdAt } = song
  const date = new Date(createdAt)
  const realDate = date.toLocaleString()
  return (
    <SongContainer>
      <div css={css`display:flex; gap: 2rem;`}>
        <SongImage alt={name} src={image} />
        <SongInfo css={css`width: 40rem;`}>
          <Link
            href='/songs/[id]'
            as={`/songs/${id}`}
          >
            <h1>{name}</h1>
          </Link>
          <h3>{description}</h3>
          <div css={css`display:flex; justify-content: space-between;`}>
            <h3 css={css`color:grey;`}>Publicado hace {formatDistanceToNow(new Date(createdAt), { locale: es })}</h3>
            <Comments>
              <Link
                href='/songs/[id]'
                as={`/songs/${id}`}
              >
                <h3>{comments.length}</h3>
                <FaComments size={25} />
              </Link>
            </Comments>
          </div>
        </SongInfo>
      </div>
      <Votes>
        <BiUpArrow />
        <h3>{votes}</h3>
      </Votes>
    </SongContainer>
  )
}

export default SongDetails
