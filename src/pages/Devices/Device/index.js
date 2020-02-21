import React from 'react'
import t from 'prop-types'

import { Container, Label, Brand } from './styled'

export default function Device ({ id, label, brand, gradient }) {
  return (
    <Container to={`devices/${id}`}>
      <Label gradient={gradient}>{label}</Label>
      <Brand>{brand}</Brand>
    </Container>
  )
}

Device.propTypes = {
  id: t.string.isRequired,
  label: t.string.isRequired,
  brand: t.string.isRequired,
  gradient: t.string.isRequired
}
