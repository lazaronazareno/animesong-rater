import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const InputText = styled.input`
  border: 1px solid var(--violet);
  padding: 1rem;
  min-width: 300px;
`

const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 3rem;
  background-image: url('/static/images/search.png');
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  background-color: var(--white);
  border: none;
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
`

const Search = () => {
  return (
    <form css={css`
        position: relative;
      `}
    >
      <InputText
        type='text'
        placeholder='Buscar Canciones...'
      />

      <InputSubmit type='submit'>Buscar</InputSubmit>
    </form>
  )
}

export default Search
