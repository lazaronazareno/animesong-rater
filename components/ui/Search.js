import React, { useState } from 'react'
import styled from '@emotion/styled'
import Router from 'next/router'
import { VscSearch } from 'react-icons/vsc'

const Form = styled.form`
  position: relative;
  
  @media (max-width : 768px) {
    width: 100%;
  }
`

const InputText = styled.input`
  background-color: var(--light-violet);
  border: none;
  border-radius: 12px;
  padding: 1.5rem;
  min-width: 300px;
  color: var(--white);

  ::placeholder {
    color: var(--white);
  }

  @media (max-width : 768px) {
    width: 100%;
  }
`

const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  position: absolute;
  right: 1rem;
  top: .8rem;
  background-color: var(--light-violet);
  border: none;

  &:hover {
    cursor: pointer;
  }
`

const Search = () => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (search.trim() === '') return

    if (search.trim().length < 3) {
      console.log('Introduce 3 o mas caracteres')
    }

    Router.push({
      pathname: '/search',
      query: { q: search }
    })

    console.log('searching', search)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputText
        type='text'
        placeholder='Introduce 3 o más caracterés'
        onChange={e => setSearch(e.target.value)}
      />

      <InputSubmit title='submit search' type='submit'><VscSearch color='white' size={28} /></InputSubmit>
    </Form>
  )
}

export default Search
