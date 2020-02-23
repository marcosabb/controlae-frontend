import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { DevicesActions } from 'store/ducks/devices'

import Loading from 'components/Loading'

import Form from '../Form'

import { Container, Wrapper, Title } from '../styled'

export default function Update () {
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

  const handleUpdate = useCallback((values) => {
    dispatch(DevicesActions.updateDeviceRequest(id, values))
  }, [id, dispatch])

  return (
    <Container>
      <Wrapper>
        <Title>Atualizar dispositivo</Title>

        {(loading.show || !selected)
          ? <Loading full />
          : (
            <Form
              label='Atualizar'
              defaultValues={selected}
              handleSubmit={handleUpdate}
            />
          )}
      </Wrapper>
    </Container>
  )
}
