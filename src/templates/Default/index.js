import React from 'react'
import t from 'prop-types'

import Header from './Header'

import { Container } from './styled'

export default function Default ({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

Default.propTypes = {
  children: t.node.isRequired
}
