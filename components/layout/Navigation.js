import Link from 'next/link'
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import FirebaseContext from '../../firebase/context.js'

const Nav = styled.nav`
  padding: 1rem;

  a {
    font-size: 1.8rem;
    margin-left: 1rem;
    color: var(--light-violet);
    font-family: 'Sofia Sans Condensed', sans-serif;

    &::last-of-type {
      margin-right: 0;
    }

    &:hover {
      color: var(--violet);
    }
  }

  @media (max-width : 768px) {
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    gap: 1rem;

    a {
      font-size: 2rem;
      margin-left: 0;
      color: var(--white);
      font-family: 'Sofia Sans Condensed',sans-serif;
      background-color: var(--light-violet);
      border-radius: 8px;
      padding: 0.5rem 4rem;
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
