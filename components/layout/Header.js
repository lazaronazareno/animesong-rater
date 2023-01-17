import Link from 'next/link'
import React, { useContext } from 'react'
import Search from '../ui/Search'
import Navigation from './Navigation'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Button from '../ui/Button'
import { FirebaseContext } from '@/firebase'

const ContainerHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const Logo = styled.p`
  color: var(--violet);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: 'Roboto Condensed', sans-serif;
  margin-right: 2rem;
`

const Header = () => {
  const { user, logout } = useContext(FirebaseContext)

  return (
    <header
      css={css`
        border-bottom:2px solid var(--violet);
        padding: 1rem 0;
      `}
    >
      <ContainerHeader>
        <div css={css`
          display: flex;
          align-items: center;
        `}
        >
          <Link href='/'>
            <Logo>ASR</Logo>
          </Link>

          <Search />

          <Navigation />

        </div>
        <div css={css`
          display: flex;
          align-items: center;
        `}
        >
          {user
            ? (
              <>
                <p
                  css={css`
                  margin-right: 2rem;
                  `}
                >Hola: {user.displayName}
                </p>
                <Button
                  bgColor='true'
                  onClick={() => logout()}
                >Cerrar Sesión
                </Button>
              </>
              )
            : (
              <>
                <Button href='/login' bgColor='true'>
                  Login
                </Button>
                <Button href='/register'>
                  Crear Cuenta
                </Button>
              </>
              )}
        </div>
      </ContainerHeader>
    </header>
  )
}

export default Header
