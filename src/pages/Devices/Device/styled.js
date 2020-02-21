import styled from 'styled-components'
import { theme, prop } from 'styled-tools'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${theme('colors.grey')};
  border-radius: ${theme('radius.xs')};
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: ${theme('spacing.default')}
  }
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width: 50px;
  height: 50px;
  margin-right: ${theme('spacing.sm')};
  font-size: ${theme('font.sm.size')};
  font-weight: 700;
  color: ${theme('colors.white')};
  background-image: linear-gradient(${prop('gradient')});
`

export const Brand = styled.span`
  font-size: ${theme('font.sm.size')};
  color: ${theme('colors.text')};
`
