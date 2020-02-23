import React, { useState, useEffect, useCallback } from 'react'
import t from 'prop-types'
import v4 from 'uuid/v4'

import Close from '../Close'

import {
  Container, Label, Wrapper, Value, Arrow, Error, Options, Option
} from './styled'

export default function Select ({
  form, field, label, placeholder, options, error, handleChange
}) {
  const [visible, setVisible] = useState(false)
  const [content, setContent] = useState('')

  const { setFieldValue } = form
  const { name, value } = field

  useEffect(() => {
    if (name && typeof value === 'object') {
      setContent(value.label)
      setFieldValue(name, value.value)
    }
  }, [name, value, setFieldValue])

  const handleToggle = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  const handleClose = useCallback(() => {
    if (visible) setVisible(false)
  }, [visible])

  const handleSelect = useCallback(({ label, value }) => {
    setContent(label)
    setFieldValue(name, value)
    handleChange(value)
    handleToggle()
  }, [name, setFieldValue, handleToggle, handleChange])

  return (
    <Close handleClose={handleClose}>
      <Container>
        <Label>{label}</Label>

        <Wrapper error={error} onClick={handleToggle}>
          <Value selected={!!value}>{value ? content : placeholder}</Value>
          <Arrow visible={visible ? 1 : 0} />
        </Wrapper>

        {error && <Error>{error}</Error>}

        {visible && (
          <Options>
            {options.map(({ label, value }) => (
              <Option
                key={v4()}
                onClick={() => handleSelect({ label, value })}
              >
                {label}
              </Option>
            ))}
          </Options>
        )}
      </Container>
    </Close>
  )
}

Select.defaultProps = {
  error: '',
  handleSelect: () => {}
}

Select.propTypes = {
  form: t.shape({
    setFieldValue: t.func
  }).isRequired,
  field: t.shape({
    name: t.string,
    value: t.oneOfType([t.string, t.shape()])
  }).isRequired,
  label: t.string.isRequired,
  placeholder: t.string.isRequired,
  error: t.string,
  options: t.arrayOf(t.shape({
    label: t.string,
    value: t.string
  })).isRequired,
  handleChange: t.func
}
