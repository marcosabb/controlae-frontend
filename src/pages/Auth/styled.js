import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 0 ${theme('spacing.default')};
  margin: 0 auto;
`

export const Footer = styled.span`
  margin-top: ${theme('spacing.default')};
  font-size: ${theme('font.sm')};
  color: ${theme('colors.text')};
  text-align: center;
`

export const Anchor = styled(Link)`
  color: ${theme('colors.blue')};
`
