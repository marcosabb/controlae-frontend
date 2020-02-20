import React from 'react'
import t from 'prop-types'

import { Container, Loading } from './styled'

export default function Loader ({ full }) {
  return (
    <Container full={full}>
      <Loading />
    </Container>
  )
}

Loader.defaultProps = {
  full: false
}

Loader.propTypes = {
  full: t.bool
}
