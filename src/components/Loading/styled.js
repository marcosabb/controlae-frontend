import styled, { keyframes, css } from 'styled-components'
import { theme, ifProp, withProp } from 'styled-tools'
import { transparentize } from 'polished'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${ifProp('full', css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `)}
`

export const Loading = styled.span`
  width: 22px;
  height: 22px;
  border: 2px solid ${withProp(theme('colors.text'), transparentize(0.6))};
  border-top-color: ${withProp(theme('colors.text'), transparentize(0.2))};
  border-radius: 50%;
  animation: 1s 0.2s ${spin} infinite;
`
