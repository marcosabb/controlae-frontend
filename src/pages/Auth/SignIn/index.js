import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Logo from 'components/Logo'

import Form from '../Form'

import { AuthActions } from 'store/ducks/auth'

import { Container, Wrapper } from '../styled'

export default function SignIn () {
  const dispatch = useDispatch()

  const handleSubmit = useCallback((email, password) => {
    dispatch(AuthActions.signInRequest(email, password))
  }, [dispatch])

  return (
    <Container>
      <Wrapper>
        <Logo />

        <Form
          label='Entrar'
          handleSubmit={handleSubmit}
        />
      </Wrapper>
    </Container>
  )
}
