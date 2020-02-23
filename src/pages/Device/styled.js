import styled from 'styled-components'
import { theme } from 'styled-tools'

export const Container = styled.section`
  padding: ${theme('spacing.lg')} 0;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 ${theme('spacing.default')};
`

export const Title = styled.h1`
  margin-bottom: ${theme('spacing.lg')};
  font-size: ${theme('font.lg')};
  font-weight: 700;
`
