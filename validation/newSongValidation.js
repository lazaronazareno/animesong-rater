const NewSongValidation = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'El nombre es obligatorio'
  }

  if (!values.url) {
    errors.url = 'La url es obligatoria'
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = 'Formato de URL no valido'
  }

  if (!values.description) {
    errors.description = 'Comparte tu opinion de la canción!'
  }

  return errors
}

export default NewSongValidation
