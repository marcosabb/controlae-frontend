import styled from 'styled-components'
import media from 'styled-media-query'
import { theme } from 'styled-tools'
import { Form } from 'formik'

export const Container = styled(Form)``

export const Details = styled.div`
  display: grid;
  grid-gap: ${theme('spacing.default')};
  padding-bottom: ${theme('spacing.default')};

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 2fr;
  `}
`

export const Control = styled.fieldset`
  border: none;
  padding: 0 0 ${theme('spacing.default')};
`

export const Label = styled.label`
  display: block;
  margin-bottom: ${theme('spacing.default')};
  font-size: ${theme('font.default')};
  font-weight: 700;
`

export const Fields = styled.div`
  display: grid;
  grid-gap: ${theme('spacing.default')};

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan('large')`
    grid-template-columns: repeat(5, 1fr);
  `}
`
