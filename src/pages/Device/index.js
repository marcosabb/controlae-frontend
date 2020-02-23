import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { DevicesActions } from 'store/ducks/devices'

import Loading from 'components/Loading'

import Form from './Form'

import { Container, Wrapper, Title } from './styled'

export default function Device () {
  const { id } = useParams()
  const { selected, loading } = useSelector(state => state.devices)

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchDevice () {
      if (id) {
        dispatch(DevicesActions.showDeviceRequest(id))
      }
    }

    fetchDevice()
  }, [id, dispatch])

  const handleCreate = useCallback(() => {}, [])

  const handleUpdate = useCallback(() => {}, [])

  return (
    <Container>
      <Wrapper>
        <Title>Adicionar dispositivo</Title>

        {(id && loading) && <Loading full />}

        <Form
          label={id ? 'Atualizar' : 'Adicionar'}
          values={id ? selected : null}
          handleSubmit={id ? handleUpdate : handleCreate}
        />
      </Wrapper>
    </Container>
  )
}
