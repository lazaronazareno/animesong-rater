import Link from 'next/link'
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { FirebaseContext } from '@/firebase'

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
  const { user } = useContext(FirebaseContext)
  return (
    <Nav>
      <Link href='/'>Inicio</Link>
      <Link href='/trending'>Populares</Link>
      {user && (
        <Link href='/new-song'>Nuevo Registro</Link>
      )}
    </Nav>
  )
}

export default Navigation
