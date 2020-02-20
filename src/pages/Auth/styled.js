import styled from 'styled-components'
import { theme } from 'styled-tools'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0 ${theme('spacing.default')};
  margin: 0 auto;
`
