import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Logo from 'components/Logo'

import Form from '../Form'

import { AuthActions } from 'store/ducks/auth'

import { Container, Wrapper, Footer, Anchor } from '../styled'

export default function SignUp () {
  const dispatch = useDispatch()

  const handleSubmit = useCallback((email, password) => {
    dispatch(AuthActions.signUpRequest(email, password))
  }, [dispatch])

  return (
    <Container>
      <Wrapper>
        <Logo />

        <Form
          label='Registrar'
          handleSubmit={handleSubmit}
        />

        <Footer>
          Já possui uma conta? <Anchor to='/signin'>Faça login.</Anchor>
        </Footer>
      </Wrapper>
    </Container>
  )
}
