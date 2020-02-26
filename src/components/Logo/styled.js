import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdSettingsRemote } from 'react-icons/md'
import { theme } from 'styled-tools'

export const Container = styled.div``

export const Anchor = styled(Link)`
  display: flex;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme('spacing.lg')};
`

export const Icon = styled(MdSettingsRemote).attrs({
  size: 28
})`
  color: ${theme('colors.text')};
`

export const Name = styled.span`
  padding-top: ${theme('spacing.sm')};
  font-size: ${theme('font.xs')};
  letter-spacing: 0.125rem;
  text-transform: uppercase;
`
