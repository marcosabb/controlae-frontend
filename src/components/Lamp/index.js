import React from 'react'
import t from 'prop-types'

import { Container, Icon } from './styled'

export default function Lamp ({ handleClick }) {
  return (
    <Container onClick={handleClick}>
      <Icon />
    </Container>
  )
}

Lamp.propTypes = {
  handleClick: t.func.isRequired
}
