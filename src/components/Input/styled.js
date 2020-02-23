import styled, { css } from 'styled-components'
import { theme, ifProp, withProp } from 'styled-tools'
import { transparentize } from 'polished'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 46px;
    padding: 0 ${theme('spacing.sm')};
    font-size: ${theme('font.sm')};
    color: ${theme('colors.text')};
    background-color:
      ${ifProp('error',
        withProp(theme('colors.danger'), transparentize(0.92)),
        theme('colors.grey')
      )}
    ;
    border: ${theme('border.primary')};
    border-radius: ${theme('radius.xs')};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme('colors.placeholder')};
    }

    ${ifProp('toggle', css`
      padding: 0 42px 0 ${theme('spacing.sm')};
    `, null)}
  }
`

export const Wrapper = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  margin-bottom: ${theme('spacing.xs')};
  font-size: ${theme('font.sm')};
  color: ${theme('colors.text')};
`

export const Error = styled.span`
  margin-top: ${theme('spacing.xs')};
  font-size: ${theme('font.sm')};
  color: ${theme('colors.danger')};
`

export const Button = styled.button`
  position: absolute;
  top: 36px;
  right: ${theme('spacing.sm')};
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const Eye = styled(IoMdEye).attrs({
  size: 18
})`
  color: ${theme('colors.text')};
`

export const EyeClosed = styled(IoMdEyeOff).attrs({
  size: 18
})`
  color: ${theme('colors.text')};
`
