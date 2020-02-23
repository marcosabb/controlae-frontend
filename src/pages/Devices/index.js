import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { DevicesActions } from 'store/ducks/devices'

import Loading from 'components/Loading'
import Button from 'components/Button'

import Device from './Device'

import { Container, Wrapper, Header, Title, List } from './styled'

export default function Devices () {
  const dispatch = useDispatch()
  const history = useHistory()
  const { data, loading } = useSelector(state => state.devices)

  useEffect(() => {
    dispatch(DevicesActions.fetchDevicesRequest())
  }, [dispatch])

  const handleCreate = useCallback(() => {
    history.push('device')
  }, [history])

  const handleUpdate = useCallback((id) => {
    history.push(`device/${id}`)
  }, [history])

  const handleDelete = useCallback((id) => {
    dispatch(DevicesActions.deleteDeviceRequest(id))
  }, [dispatch])

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Dispositivos</Title>
          <Button type='button' variant='primary' handleClick={handleCreate}>
            Novo dispositivo
          </Button>
        </Header>

        <List>
          {loading
            ? <Loading full />
            : data.map(({ _id, label, brand, gradient }) => (
              <Device
                key={_id}
                id={_id}
                label={label}
                brand={brand}
                gradient={gradient}
                handleUpdate={() => handleUpdate(_id)}
                handleDelete={() => handleDelete(_id)}
              />
            ))}
        </List>
      </Wrapper>
    </Container>
  )
}
