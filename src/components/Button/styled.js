import styled, { css } from 'styled-components'
import { ifProp, theme, switchProp, withProp } from 'styled-tools'
import { darken } from 'polished'

export const Container = styled.button`
  width: ${ifProp('fluid', '100%', 'auto')};
  height: 46px;
  padding: 0 ${theme('spacing.sm')};
  font-size: ${theme('font.sm')};
  color: ${theme('colors.white')};
  border: none;
  border-radius: ${theme('radius.xs')};
  transition: background-color .2s linear;
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};

  &:focus {
    outline: none;
  }

  ${switchProp('variant', {
    primary: css`
      background-color: ${theme('colors.blue')};

      &:hover {
        background-color: ${withProp(theme('colors.blue'), darken(0.04))};
      }
    `,

    danger: css`
      background-color: ${theme('colors.danger')};

      &:hover {
        background-color: ${withProp(theme('colors.danger'), darken(0.04))};
      }
    `
  })}
`
