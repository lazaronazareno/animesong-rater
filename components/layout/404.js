import React from 'react'
import styled from '@emotion/styled'

const Error = styled.h1`
  width: 50%;
  margin: 5rem;
  padding: 3rem;
  font-family: 'Sofia Sans Condensed', sans-serif;
  text-align: center;
  background-color: var(--red);
  color: var(--white);
`

const Error404 = ({ msg }) => {
  return (
    <Error>{msg}</Error>
  )
}

export default Error404
