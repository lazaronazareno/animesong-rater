import Layout from '@/components/layout/Layout'
import { Form, FormField, InputSubmit, Error } from '@/components/ui/Form'
import React, { useState } from 'react'
import Router from 'next/router'

import useValidation from '@/hooks/useValidation'
import RegisterValidation from '@/validation/registerValidation'
import { register } from '@/firebase/firebase'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

const Register = () => {
  const [error, setError] = useState(false)

  const { values, errors, handleChange, handleSubmit } = useValidation(INITIAL_STATE, RegisterValidation, Register)

  const { name, email, password } = values

  async function Register () {
    try {
      await register(name, email, password)
      Router.push('/')
    } catch (error) {
      console.log('Hubo un error al crear el usuario', error)
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
          <h1>Crear Cuenta</h1>
          <Form
            onSubmit={handleSubmit}
            noValidate={email}
          >
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
              value='Crear Cuenta'
            />
            {error && <Error>{error}</Error>}
          </Form>
        </>
      </Layout>
    </>
  )
}

export default Register
