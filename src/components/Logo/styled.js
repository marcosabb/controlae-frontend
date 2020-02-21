import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import { theme } from 'styled-tools'

export const Container = styled.div``

export const Anchor = styled(Link)``

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme('spacing.lg')};
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${theme('colors.ripple')};
  border-radius: 50%;
`

export const Power = styled(FiPower).attrs({
  size: 24
})`
  color: ${theme('colors.blue')};
`

export const Name = styled.span`
  margin-top: ${theme('spacing.sm')};
  font-size: ${theme('font.sm')};
  text-transform: uppercase;
  letter-spacing: 0.125rem;
`
