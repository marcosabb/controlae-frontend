import styled from 'styled-components'
import media from 'styled-media-query'
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
  display: grid;
  grid-gap: ${theme('spacing.default')};

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
  `}
`

export const Title = styled.h1`
  font-size: ${theme('font.lg')};
  margin-bottom: ${theme('spacing.lg')};
`
