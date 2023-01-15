import Layout from '@/components/layout/Layout'
import { Form, FormField, InputSubmit, Error } from '@/components/ui/Form'
import React, { useState } from 'react'
import Router from 'next/router'

import useValidation from '@/hooks/useValidation'
import LoginValidation from '@/validation/loginValidation'
import { login } from '@/firebase/firebase'

const INITIAL_STATE = {
  email: '',
  password: ''
}

const Login = () => {
  const [error, setError] = useState(false)

  const { values, errors, handleChange, handleSubmit } = useValidation(INITIAL_STATE, LoginValidation, Login)

  const { email, password } = values

  async function Login () {
    try {
      await login(email, password)
      Router.push('/')
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no encontrado.')
      } else if (error.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta.')
      } else {
        setError('Hubo un error en el servidor.')
      }
    }
  }

  return (
    <>
      <Layout>
        <>
          <h1>Iniciar Sesión</h1>
          <Form
            onSubmit={handleSubmit}
            noValidate={email}
          >
            <FormField>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='ingrese su mail'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </FormField>
            {errors.email && <Error>{errors.email}</Error>}

            <FormField>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                id='password'
                placeholder='ingrese una Contraseña'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </FormField>
            {errors.password && <Error>{errors.password}</Error>}

            <InputSubmit
              type='submit'
              value='Iniciar Sesión'
            />
            {error && <Error>{error}</Error>}
          </Form>
        </>
      </Layout>
    </>
  )
}

export default Login
