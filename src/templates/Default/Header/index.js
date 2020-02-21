import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { AuthActions } from 'store/ducks/auth'

import Logo from 'components/Logo'

import { Container, Wrapper, Logout } from './styled'

export default function Header () {
  const dispatch = useDispatch()

  const handleLogout = useCallback(() => {
    dispatch(AuthActions.signOut())
  }, [dispatch])

  return (
    <Container>
      <Wrapper>
        <Logo to='/devices' size={20} />

        <Logout onClick={handleLogout}>Sair</Logout>
      </Wrapper>
    </Container>
  )
}
