import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { DevicesActions } from 'store/ducks/devices'

import Form from '../Form'

import { Container, Wrapper, Title } from '../styled'

function Create () {
  const dispatch = useDispatch()

  const handleCreate = useCallback((values) => {
    delete values[values.type]

    console.log(values)

    dispatch(DevicesActions.createDeviceRequest(values))
  }, [dispatch])

  return (
    <Container>
      <Wrapper>
        <Title>Adicionar dispositivo</Title>

        <Form
          label='Criar'
          handleSubmit={handleCreate}
        />
      </Wrapper>
    </Container>
  )
}

export default Create
