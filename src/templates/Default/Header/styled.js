import styled from 'styled-components'
import media from 'styled-media-query'
import { theme } from 'styled-tools'

export const Container = styled.header`
  background-color: ${theme('colors.lightgrey')};
  border-bottom: 1px solid ${theme('colors.grey')};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 ${theme('spacing.default')};
`

export const Logout = styled.button`
  background-color: transparent;
  font-size: ${theme('font.sm')};
  color: ${theme('colors.text')};
  border: none;
  cursor: pointer;

  ${media.lessThan('medium')`
    margin-right: ${theme('spacing.lg')};
  `}

  &:focus {
    outline: none;
  }
`
