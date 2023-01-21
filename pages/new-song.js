import Layout from '@/components/layout/Layout'
import { v4 as uuidv4 } from 'uuid'
import { Form, FormField, InputSubmit, Error } from '@/components/ui/Form'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'

import FirebaseContext from '../firebase/context.js'

import useValidation from '@/hooks/useValidation'
import NewSongValidation from '@/validation/newSongValidation'
import { ref, getDownloadURL } from 'firebase/storage'
import useUploadFile from '@/hooks/useUploadFile'
import Error404 from '@/components/layout/404'
import { storage } from '@/firebase/firebase'

const INITIAL_STATE = {
  name: '',
  url: '',
  description: '',
  image: '',
  anime: '',
  artist: '',
  originalName: ''
}
const NewSong = () => {
  const { values, errors, handleChange, handleSubmit } = useValidation(INITIAL_STATE, NewSongValidation, AddSong)

  const { name, url, description, image, anime, artist, originalName } = values

  const songId = uuidv4()

  const router = useRouter()

  const { user, addNewSong } = useContext(FirebaseContext)

  const [uploadFile, uploading, imageError] = useUploadFile()
  const storageRef = ref(storage, `/song-images/${songId}.png`)
  const [selectedFile, setSelectedFile] = useState()

  const upload = async () => {
    if (selectedFile) {
      await uploadFile(storageRef, selectedFile, {
        contentType: 'image/*'
      })
    }
  }

  async function AddSong () {
    if (!user) {
      return router.push('/login')
    }

    await upload()

    let urlImage = ''

    urlImage = await getDownloadURL(ref(storage, `/song-images/${songId}.png`))

    const newSong = {
      name,
      url,
      description,
      anime,
      artist,
      originalName,
      image: urlImage,
      votes: 0,
      comments: [],
      createdAt: Date.now(),
      author: {
        id: user.uid,
        name: user.displayName
      },
      userVotes: []
    }
    addNewSong(newSong)

    return router.push('/')
  }

  return (
    <>
      <Layout>
        {!user
          ? <Error404 msg='No se puede mostrar el contenido. Logueate!' />
          : (
            <>
              <h1 css={css`color:var(--white);`}>Nueva Canción</h1>
              <Form
                onSubmit={handleSubmit}
              >
                <fieldset>
                  <legend>Información general</legend>
                  <FormField>
                    <label htmlFor='name'>Nombre</label>
                    <input
                      type='text'
                      id='name'
                      placeholder='Nombre de la Canción'
                      name='name'
                      value={name}
                      onChange={handleChange}
                    />
                  </FormField>
                  {errors.name && <Error>{errors.name}</Error>}

                  <FormField>
                    <label htmlFor='url'>Url</label>
                    <input
                      type='url'
                      id='url'
                      placeholder='Enlace de la cancion'
                      name='url'
                      value={url}
                      onChange={handleChange}
                    />
                  </FormField>
                  {errors.url && <Error>{errors.url}</Error>}

                  <FormField>
                    <label htmlFor='image'>Imagen</label>
                    <input
                      type='file'
                      onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : undefined
                        setSelectedFile(file)
                      }}
                      id='image'
                      placeholder='Imagen'
                      name='image'
                      value={image}
                    />
                  </FormField>
                  {imageError && <strong>{imageError.message}</strong>}
                  {uploading && <span>Uploading file...</span>}
                  {selectedFile && <span>Selected file: {selectedFile.name}</span>}
                </fieldset>

                <fieldset>
                  <legend>¿Por que este tema?</legend>

                  <FormField>
                    <label htmlFor='description'>Descripción</label>
                    <textarea
                      id='description'
                      placeholder='¿Por que te gusta esta canción?, ¿Como te sentis al escucharla?, etc'
                      name='description'
                      value={description}
                      onChange={handleChange}
                    />
                  </FormField>
                  {errors.description && <Error>{errors.description}</Error>}
                </fieldset>

                <fieldset>
                  <legend>Informacion Extra</legend>

                  <FormField>
                    <label htmlFor='anime'>Anime</label>
                    <input
                      type='text'
                      id='anime'
                      placeholder='Nombre del anime donde aparece'
                      name='anime'
                      value={anime}
                      onChange={handleChange}
                    />
                  </FormField>
                  {errors.anime && <Error>{errors.anime}</Error>}

                  <FormField>
                    <label htmlFor='artist'>Artista</label>
                    <input
                      type='text'
                      id='artist'
                      placeholder='Nombre del artista'
                      name='artist'
                      value={artist}
                      onChange={handleChange}
                    />
                  </FormField>
                  {errors.artist && <Error>{errors.artist}</Error>}

                  <FormField>
                    <label htmlFor='originalName'>Nombre Cancion / Nombre Original</label>
                    <input
                      type='text'
                      id='originalName'
                      placeholder='Nombre de la canción, o nombre original'
                      name='originalName'
                      value={originalName}
                      onChange={handleChange}
                    />
                  </FormField>
                  {errors.originalName && <Error>{errors.originalName}</Error>}
                </fieldset>

                <InputSubmit
                  type='submit'
                  value='Nueva Canción'
                />
              </Form>
            </>

            )}
      </Layout>
    </>
  )
}

export default NewSong
