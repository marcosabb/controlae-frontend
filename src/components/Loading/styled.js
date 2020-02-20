import styled, { keyframes, css } from 'styled-components'
import { ifProp } from 'styled-tools'

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
  border: 2px solid rgba(0, 0, 0, .2);
  border-top-color: rgba(0, 0, 0, .6);
  border-radius: 50%;
  animation: 1s 0.2s ${spin} infinite;
`
