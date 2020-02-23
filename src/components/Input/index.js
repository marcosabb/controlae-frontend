import React, { useState, useCallback } from 'react'
import t from 'prop-types'
import { Field } from 'formik'

import {
  Container, Wrapper, Label, Error, Button, Eye, EyeClosed
} from './styled'

export default function Input ({
  type, name, label, placeholder, disabled, error, toggle
}) {
  const [visible, setVisible] = useState(false)

  const toggleValue = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <Container disabled={disabled} error={error} toggle={toggle}>
      <Wrapper>
        <Label>{label}</Label>
        <Field
          type={
            toggle
              ? (visible ? 'text' : type)
              : type
          }
          name={name}
          placeholder={placeholder}
          disabled={disabled}
        />

        {toggle && (
          <Button type='button' onClick={toggleValue}>
            {visible ? <EyeClosed /> : <Eye />}
          </Button>
        )}
      </Wrapper>

      {error && <Error>{error}</Error>}
    </Container>
  )
}

Input.propTypes = {
  disabled: false,
  error: null,
  toggle: false
}

Input.propTypes = {
  type: t.string.isRequired,
  name: t.string.isRequired,
  label: t.string.isRequired,
  placeholder: t.string.isRequired,
  disabled: t.bool,
  error: t.string,
  toggle: t.bool
}
