import Layout from '@/components/layout/Layout'
import { Form, FormField, InputSubmit, Error } from '@/components/ui/Form'
import React from 'react'

import useValidation from '@/hooks/useValidation'
import RegisterValidation from '@/validation/registerValidation'

const Register = () => {
  const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
  }

  function Register () {
    console.log('Creando Cuenta...')
  }
  const { values, errors, handleChange, handleSubmit } = useValidation(INITIAL_STATE, RegisterValidation, Register)

  const { name, email, password } = values

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
          </Form>
        </>
      </Layout>
    </>
  )
}

export default Register
