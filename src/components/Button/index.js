import React from 'react'
import t from 'prop-types'

import Loading from 'components/Loading'

import { Container } from './styled'

export default function Button ({
  type, disabled, loading, variant, fluid, handleClick, children
}) {
  return (
    <Container
      type={type}
      disabled={disabled}
      variant={variant}
      fluid={fluid}
      handleClick={type === 'button' ? handleClick : undefined}
    >
      {loading ? <Loading /> : children}
    </Container>
  )
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  loading: false,
  variant: 'primary',
  fluid: false,
  handleClick: () => {}
}

Button.propTypes = {
  type: t.string,
  disabled: t.bool,
  loading: t.bool,
  variant: t.string,
  fluid: t.bool,
  handleClick: t.func,
  children: t.node.isRequired
}
