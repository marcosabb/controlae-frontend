import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Form } from 'formik'

export const Container = styled(Form)`
  display: grid;
  grid-gap: ${theme('spacing.default')};
`
