import React from 'react'
import t from 'prop-types'

import { Container, Anchor, Wrapper, Icon, Remote, Name } from './styled'

export default function Logo ({ to }) {
  return (
    <Container>
      {to ? (
        <Anchor to={to}>
          <Icon size={24}>
            <Remote size={24} />
          </Icon>
        </Anchor>
      ) : (
        <Wrapper>
          <Icon size={40}>
            <Remote size={40} />
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
