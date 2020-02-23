import React, { useState, useCallback } from 'react'
import t from 'prop-types'
import { Field } from 'formik'

import {
  Container, Wrapper, Label, Error, Button, Eye, EyeClosed
} from './styled'

export default function Input ({
  type, name, label, placeholder, error, toggle
}) {
  const [visible, setVisible] = useState(false)

  const toggleValue = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <Container error={error} toggle={toggle}>
      <Wrapper>
        <Label>{label}</Label>
        <Field
          type={
            toggle
              ? (visible ? 'text' : type)
              : type
          }
          name={name} placeholder={placeholder}
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
  error: null,
  toggle: false
}

Input.propTypes = {
  type: t.string.isRequired,
  name: t.string.isRequired,
  label: t.string.isRequired,
  placeholder: t.string.isRequired,
  error: t.string,
  toggle: t.bool
}
