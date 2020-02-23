import styled from 'styled-components'
import media from 'styled-media-query'
import { theme } from 'styled-tools'
import { MdLightbulbOutline } from 'react-icons/md'

export const Container = styled.button`
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${media.lessThan('medium')`
    position: absolute;
    top: ${theme('spacing.default')};
    right: 65px;
  `}

  ${media.greaterThan('medium')`
    position: fixed;
    bottom: ${theme('spacing.default')};
    left: ${theme('spacing.default')};
  `}
`

export const Icon = styled(MdLightbulbOutline).attrs({
  size: 20
})`
  color: ${theme('colors.text')}
`
