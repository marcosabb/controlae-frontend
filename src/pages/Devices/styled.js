import styled from 'styled-components'
import { theme } from 'styled-tools'

export const Container = styled.section`
  height: 100%;
  padding: ${theme('spacing.lg')} 0;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  padding: 0 ${theme('spacing.default')};
  margin: 0 auto;
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`
