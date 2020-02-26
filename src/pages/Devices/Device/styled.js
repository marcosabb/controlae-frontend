import styled from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { MdMoreVert } from 'react-icons/md'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 ${theme('spacing.xs')} 0 ${theme('spacing.sm')};
  background-color: ${theme('colors.grey')};
  border: ${theme('border.primary')};
  border-radius: ${theme('radius.xs')};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-right: ${theme('spacing.sm')};
  font-size: ${theme('font.default')};
  font-weight: 700;
  letter-spacing: 0.200rem;
  color: ${theme('colors.text')};
  border-radius: ${theme('radius.xs')};
`

export const Brand = styled.span`
  font-size: ${theme('font.sm')};
  color: ${theme('colors.text')};
`

export const Dropdown = styled.div``

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  background-color: ${ifProp('visible', theme('colors.ripple'), 'transparent')};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${theme('colors.ripple')};
  }
`

export const Icon = styled(MdMoreVert).attrs({
  size: 20
})`
  color: ${theme('colors.text')};
`

export const Options = styled.ul`
  position: absolute;
  top: 62px;
  right: -1px;
  z-index: 1;
  background-color: ${theme('colors.grey')};
  border: ${theme('border.primary')};
  border-radius: ${theme('radius.xs')};
`

export const Option = styled.li`
  display: flex;
  align-items: center;
  height: 36px;
  padding: ${theme('spacing.sm')};
  font-size: ${theme('font.sm')};
  color: ${theme('colors.placeholder')};
  cursor: pointer;

  &:first-child {
    border-radius: ${theme('radius.xs')} ${theme('radius.xs')} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${theme('radius.xs')} ${theme('radius.xs')};
  }

  &:hover {
    color: ${theme('colors.text')};
    background-color: ${theme('colors.ripple')};
  }
`
