import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Router from 'next/router'
import { VscSearch } from 'react-icons/vsc'

const InputText = styled.input`
  background-color: var(--light-violet);
  border: none;
  border-radius: 12px;
  padding: 1.5rem;
  min-width: 300px;

  ::placeholder {
    color: var(--white);
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
    <form
      css={css`
        position: relative;
      `}
      onSubmit={handleSubmit}
    >
      <InputText
        type='text'
        placeholder='Introduce 3 o más caracterés'
        onChange={e => setSearch(e.target.value)}
      />

      <InputSubmit type='submit'><VscSearch color='white' size={28} /></InputSubmit>
    </form>
  )
}

export default Search
