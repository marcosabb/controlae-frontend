import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DevicesActions } from 'store/ducks/devices'

import Loading from 'components/Loading'

import Device from './Device'

import { Container, Wrapper, Title, List } from './styled'

export default function Devices () {
  const dispatch = useDispatch()
  const { data, loading } = useSelector(state => state.devices)

  useEffect(() => {
    dispatch(DevicesActions.fetchDevicesRequest())
  }, [dispatch])

  return (
    <Container>
      <Wrapper>
        <Title>Dispositivos</Title>

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
              />
            ))}
        </List>
      </Wrapper>
    </Container>
  )
}
