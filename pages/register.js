import Layout from '@/components/layout/Layout'
import { AuthForm, FormField, InputSubmit, Error } from '@/components/ui/Form'
import React, { useContext, useState } from 'react'
import Router from 'next/router'
import { css } from '@emotion/react'

import FirebaseContext from '../firebase/context.js'

import useValidation from '@/hooks/useValidation'
import RegisterValidation from '@/validation/registerValidation'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

const Register = () => {
  const { register } = useContext(FirebaseContext)

  const [error, setError] = useState(false)

  const { values, errors, handleChange, handleSubmit } = useValidation(INITIAL_STATE, RegisterValidation, Register)

  const { name, email, password } = values

  async function Register () {
    try {
      await register(name, email, password)
      Router.push('/')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email ya registrado.')
      } else {
        setError(error.code)
      }
    }
  }

  return (
    <>
      <Layout>
        <>
          <AuthForm
            onSubmit={handleSubmit}
            noValidate={email}
          >
            <h1 css={css`text-align:center;`}>Crear Cuenta</h1>
            <FormField>
              <label htmlFor='name'>Nombre</label>
              <input
                type='text'
                id='name'
                placeholder='Tu nombre'
                name='name'
                value={name}
                onChange={handleChange}
              />
            </FormField>
            {errors.name && <Error>{errors.name}</Error>}

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
              <label htmlFor='password'>Contrase??a</label>
              <input
                type='password'
                id='password'
                placeholder='ingrese una Contrase??a'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </FormField>
            {errors.password && <Error>{errors.password}</Error>}

            <InputSubmit
              type='submit'
              value='Crear Cuenta'
            />
            {error && <Error>{error}</Error>}
          </AuthForm>
        </>
      </Layout>
    </>
  )
}

export default Register
