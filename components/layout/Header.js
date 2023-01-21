import Link from 'next/link'
import React, { useContext, useState } from 'react'
import Search from '../ui/Search'
import Navigation from './Navigation'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Button from '../ui/Button'
import FirebaseContext from '../../firebase/context.js'
import { useRouter } from 'next/router'
import MenuButton from '../ui/MenuButton'

const ContainerHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  
`

const Container = styled.div`
    display: flex;
    align-items: center;

  @media (max-width : 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
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

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width : 768px) {
    display: none;
    flex-direction: column;
    gap: 1rem;
  }
`

const AuthContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width : 768px) {
      display: none;
      flex-direction: column;
      margin: 1rem 0;
  }
`

const Header = () => {
  const [show, setShow] = useState(false)
  const { user, logout } = useContext(FirebaseContext)
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <header
      css={css`
        border-bottom:2px solid var(--violet);
        padding: 1rem 0;
      `}
    >
      <ContainerHeader>
        <Container>
          <Link href='/'>
            <Logo>ASR</Logo>
          </Link>

          <MenuButton show={show} setShow={setShow} />
          <NavContainer css={css`display: ${show ? 'flex!important' : ''};`}>
            <Search />

            <Navigation />

          </NavContainer>
        </Container>
        <AuthContainer css={css`display: ${show ? 'flex!important' : ''};`}>
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
                  onClick={handleLogout}
                  title='Logout'
                >Cerrar Sesión
                </Button>
              </>
              )
            : (
              <>
                <Button href='/login' bgColor='true' title='login'>
                  Login
                </Button>
                <Button href='/register' title='register'>
                  Crear Cuenta
                </Button>
              </>
              )}
        </AuthContainer>
      </ContainerHeader>
    </header>
  )
}

export default Header
