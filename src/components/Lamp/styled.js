import styled from 'styled-components'
import { theme } from 'styled-tools'
import { MdLightbulbOutline } from 'react-icons/md'

export const Container = styled.button`
  position: absolute;
  bottom: ${theme('spacing.lg')};
  left: ${theme('spacing.lg')};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${theme('colors.ripple')};
  border: none;
  cursor: pointer;


  &:focus {
    outline: none;
  }
`

export const Icon = styled(MdLightbulbOutline).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.text
}))``
