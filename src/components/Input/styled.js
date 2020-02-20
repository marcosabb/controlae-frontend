import styled from 'styled-components'
import { theme, ifProp, withProp } from 'styled-tools'
import { transparentize } from 'polished'
import { MdRemoveRedEye } from 'react-icons/md'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme('spacing.default')};

  input {
    height: 46px;
    padding: 0 ${ifProp('toggle', '42px', 0)} 0 ${theme('spacing.sm')};
    font-size: ${theme('font.sm.size')};
    color: ${theme('colors.text')};
    background-color:
      ${ifProp('error',
        withProp(theme('colors.danger'), transparentize(0.92)),
        theme('colors.grey')
      )}
    ;
    border: none;
    border-radius: ${theme('radius.xs')};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme('colors.placeholder')};
    }
  }
`

export const Wrapper = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  margin-bottom: ${theme('spacing.xs')};
  font-size: ${theme('font.sm.size')};
  color: ${theme('colors.text')};
`

export const Error = styled.span`
  margin-top: ${theme('spacing.xs')};
  font-size: ${theme('font.sm.size')};
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

export const Icon = styled(MdRemoveRedEye).attrs({
  size: 18
})`
  color: ${theme('colors.text')};
`
