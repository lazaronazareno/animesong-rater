import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import FirebaseContext from '../../firebase/context.js'
import Error404 from '@/components/layout/404'
import Layout from '@/components/layout/Layout'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { FormField, InputSubmit } from '@/components/ui/Form'
import Button from '@/components/ui/Button'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { es } from 'date-fns/locale'
import Loading from '@/components/layout/Loading'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  margin: 4rem;
  padding: 2rem;  
`

const Container = styled.div`
  padding: 3rem;
  align-items: center;

  @media (max-width : 768px) {
    padding: 0;
  }
`

const SongContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
  @media (max-width : 768px) {
    display: flex;
    flex-direction: column-reverse;

    aside {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
    }

    aside a {
      border-radius: 12px;
      margin: 0;
    }

    aside h3 {
      margin: 0;
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

const AuthorComment = styled.p`
  padding: .5rem;
  background-color: var(--yellow);
  color: var(--violet);
  text-transform : uppercase;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`

const Song = () => {
  const [song, setSong] = useState({})
  const [error, setError] = useState(false)
  const [voteError, setVoteError] = useState(false)
  const [comment, setComment] = useState({})
  const [loadDB, setLoadDB] = useState(true)

  const { user, getSongById, updateSongVotes, updateSongComments, deleteSong } = useContext(FirebaseContext)

  const router = useRouter()
  const { query: { id } } = router

  const getSong = async (id) => {
    const response = await getSongById(id)
    if (!response) {
      setError(true)
      return
    }
    setError(false)
    setSong(response)
  }

  const { name, url, description, anime, artist, originalName, image, comments, votes, createdAt, userVotes, author } = song

  useEffect(() => {
    if (id && loadDB) {
      getSong(id)
      setLoadDB(false)
    }
  }, [id])

  if (Object.keys(song).length === 0 && !error) return <Loading />

  const handleVote = async () => {
    if (!user) {
      return router.push('/login')
    }

    const newVotes = votes + 1

    if (userVotes.includes(user.uid)) {
      setVoteError('Ya has votado por esta canci??n!')
      return
    }

    setVoteError(false)
    const newUserVotes = [...userVotes, user.uid]
    try {
      await updateSongVotes(id, newVotes, newUserVotes)

      setSong({
        ...song,
        votes: newVotes
      })

      setLoadDB(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleComment = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value
    })
  }

  const isAuthorComment = (id) => {
    if (id === author.id) {
      return true
    }
  }

  const submitComment = async e => {
    e.preventDefault()

    if (!user) {
      return router.push('/login')
    }

    comment.userId = user.uid
    comment.userName = user.displayName

    const newComments = [...comments, comment]

    try {
      await updateSongComments(id, newComments)
    } catch (error) {
      console.log(error)
    }

    setSong({
      ...song,
      comments: newComments
    })
    setLoadDB(true)
  }

  const canDelete = () => {
    if (!user) return false
    if (user.uid === author.id) {
      return true
    }
  }

  const handleDelete = async () => {
    if (!user) {
      return router.push('/login')
    }
    if (user.uid !== author.id) {
      return router.push('/login')
    }

    try {
      await deleteSong(id)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <>
        {error
          ? <Error404 msg='Id inexistente' />
          : (
            <MainContainer>
              <h1>{name}</h1>
              <Container>

                <SongContainer>
                  <div css={css`
                  display: flex;
                  flex-direction: column;
                `}
                  >
                    <div css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                    >
                      <h3>Publicado hace {formatDistanceToNow(new Date(createdAt), { locale: es })}</h3>
                      <h3>Por : {author.name}</h3>
                    </div>
                    <ImageContainer>
                      <img
                        css={css`
                      width: 50%;
                      aspect-ratio: 1/1;
                    `}
                        alt={name}
                        src={image}
                      />
                      <div>
                        <h3>{anime}</h3>
                        <h3>{originalName}</h3>
                        <h3>{artist}</h3>
                        <h3>"{description}"</h3>
                      </div>
                    </ImageContainer>

                    {user && (
                      <>
                        <h2>Agrega tu comentario</h2>
                        <form onSubmit={submitComment}>
                          <FormField>
                            <input
                              type='text'
                              name='text'
                              onChange={handleComment}
                              placeholder='Escribe un comentario'
                            />
                          </FormField>
                          <InputSubmit
                            type='submit'
                            value='Agregar Comentario'
                          />
                        </form>
                      </>
                    )}

                    <h2>Comentarios</h2>

                    {comments.length === 0
                      ? 'Aun no hay comentarios.'
                      : (
                        <ul>
                          {comments.map((comment, i) => (
                            <li
                              key={`${comment.userId}-${i}`}
                              css={css`
                              padding: 2rem;
                              border: 1px solid var(--violet);
                          `}
                            >
                              {isAuthorComment(comment.userId) && <AuthorComment>Es creador</AuthorComment>}
                              <p css={css`font-size:2rem;`}>{comment.text}</p>
                              <p>Escrito por: <span css={css`font-weight:bold;`}>{' '}{comment.userName}</span></p>
                            </li>
                          ))}
                        </ul>
                        )}
                  </div>

                  <aside>
                    <Button
                      target='_blank'
                      bgColor='true'
                      href={url}
                      title='url link'
                    >
                      Escuchar
                    </Button>

                    {user && (
                      <Button
                        onClick={handleVote}
                        title='vote'
                      >Votar
                      </Button>
                    )}

                    {
                    voteError &&
                      <p css={css`
                        padding: 1rem;
                        background-color: var(--red);
                        color: var(--white);
                        text-align: center;
                      `}
                      >
                        {voteError}
                      </p>
                  }

                    <h3 css={css`text-align: center;`}>{votes} Votos</h3>

                    {canDelete && <Button title='delete' css={css`background-color:var(--red); color:var(--white);`} onClick={handleDelete}>Borrar Cancion</Button>}
                  </aside>
                </SongContainer>
              </Container>
            </MainContainer>
            )}
      </>
    </Layout>
  )
}

export default Song
