const LoginValidation = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'El email es obligatorio'
  } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email no valido'
  }

  if (!values.password) {
    errors.password = 'La contraseña es obligatoria'
  } else if (values.password.length < 6) {
    errors.password = 'La contraseña debe ser de al menos 6 caracteres'
  }

  return errors
}

export default LoginValidation
