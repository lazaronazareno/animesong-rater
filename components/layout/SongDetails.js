import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { FaComments } from 'react-icons/fa'
import { BiUpArrow } from 'react-icons/bi'
import Link from 'next/link'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { es } from 'date-fns/locale'
import FirebaseContext from '../../firebase/context.js'

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
  flex-wrap: wrap;

  div:first-child {
    flex-wrap: wrap;
    display:flex;
    gap: 2rem;
  }

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

  @media (max-width: 768px) {
    width: auto;
      div:first-of-type {
      flex-direction: column;
    }
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

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      flex-direction: row;
      width: 100%;
      padding: 0;
      margin: 1rem 0;
      justify-content: center;
    }
`

const SongDetails = ({ song }) => {
  const { id, name, description, image, comments, votes, createdAt, userVotes } = song

  const [voteError, setVoteError] = useState(false)

  const router = useRouter()

  const { user, updateSongVotes } = useContext(FirebaseContext)

  const handleVote = async () => {
    if (!user) {
      return router.push('/login')
    }

    const newVotes = votes + 1

    if (userVotes.includes(user.uid)) {
      setVoteError('Ya has votado por esta canción!')
      return
    }

    setVoteError(false)
    const newUserVotes = [...userVotes, user.uid]
    try {
      await updateSongVotes(id, newVotes, newUserVotes)

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SongContainer>
      <div>
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
              {voteError && <span>{voteError}</span>}
            </Comments>
          </div>
        </SongInfo>
      </div>
      <Votes onClick={handleVote}>
        <BiUpArrow />
        <h3>{votes}</h3>
      </Votes>
    </SongContainer>
  )
}

export default SongDetails
