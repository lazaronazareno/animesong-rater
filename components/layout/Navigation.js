import Link from 'next/link'
import React from 'react'
import styled from '@emotion/styled'

const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--light-violet);
    font-family: 'Sofia Sans Condensed', sans-serif;

    &::last-of-type {
      margin-right: 0;
    }

    &:hover {
      color: var(--violet);
    }
  }
`

const Navigation = () => {
  return (
    <Nav>
      <Link href='/'>Inicio</Link>
      <Link href='/trending'>Populares</Link>
      <Link href='/new-song'>Nuevo Registro</Link>
    </Nav>
  )
}

export default Navigation
