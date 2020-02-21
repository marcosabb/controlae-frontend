import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdSettingsRemote } from 'react-icons/md'
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

export const Icon = styled(MdSettingsRemote).attrs({
  size: 40
})`
  color: ${theme('colors.blue')};
`

export const Type = styled.span`
  margin-top: ${theme('spacing.sm')};
  font-size: ${theme('fontSize.md')};
  text-transform: uppercase;
  letter-spacing: 0.125rem;
`
