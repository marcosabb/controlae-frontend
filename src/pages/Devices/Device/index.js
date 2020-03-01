import React, { useState, useCallback } from 'react'
import t from 'prop-types'

import Close from 'components/Close'

import {
  Container, Wrapper, Name, Brand, Dropdown, Button, Icon, Options, Option
} from './styled'

export default function Device ({
  name, brand, gradient, handleUpdate, handleDelete
}) {
  const [visible, setVisible] = useState(false)

  const handleToggle = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  const handleClose = useCallback(() => {
    if (visible) setVisible(false)
  }, [visible])

  console.log(gradient)
  return (
    <Close handleClose={handleClose}>
      <Container gradient={gradient}>
        <Wrapper>
          <Name>{name}</Name>
          <Brand>{brand}</Brand>
        </Wrapper>

        <Dropdown>
          <Button onClick={handleToggle} visible={visible}>
            <Icon />
          </Button>

          {visible && (
            <Options>
              <Option onClick={handleUpdate}>Atualizar</Option>
              <Option onClick={handleDelete}>Excluir</Option>
            </Options>
          )}
        </Dropdown>
      </Container>
    </Close>
  )
}

Device.propTypes = {
  name: t.string.isRequired,
  brand: t.string.isRequired,
  gradient: t.string.isRequired,
  handleUpdate: t.func.isRequired,
  handleDelete: t.func.isRequired
}
