import React from 'react'
import t from 'prop-types'

import { Container, Anchor, Wrapper, Icon, Power, Name } from './styled'

export default function Logo ({ to }) {
  return (
    <Container>
      {to ? (
        <Anchor to={to}>
          <Icon>
            <Power />
          </Icon>
        </Anchor>
      ) : (
        <Wrapper>
          <Icon>
            <Power />
          </Icon>
          <Name>Controlaê</Name>
        </Wrapper>
      )}
    </Container>
  )
}

Logo.propTypes = {
  to: t.string
}
