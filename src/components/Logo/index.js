import React from 'react'
import t from 'prop-types'

import { Container, Anchor, Wrapper, Icon, Name } from './styled'

export default function Logo ({ to }) {
  return (
    <Container>
      {to ? (
        <Anchor to={to}>
          <Icon />
        </Anchor>
      ) : (
        <Wrapper>
          <Icon />
          <Name>Controlaê | Dashboard</Name>
        </Wrapper>
      )}
    </Container>
  )
}

Logo.propTypes = {
  to: t.string
}
