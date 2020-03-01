import styled from 'styled-components'
import { theme, prop } from 'styled-tools'
import { MdMoreVert } from 'react-icons/md'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(${prop('gradient')});
  border-radius: ${theme('radius.xs')};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${theme('spacing.default')};
`

export const Name = styled.span`
  margin-bottom: ${theme('spacing.xs')};
  font-size: ${theme('font.default')};
  font-weight: 700;
  color: ${theme('colors.white')};
`

export const Brand = styled.span`
  font-size: ${theme('font.xs')};
  color: ${theme('colors.white')};
`

export const Dropdown = styled.div``

export const Button = styled.button`
  position: absolute;
  top: ${theme('spacing.xs')};
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const Icon = styled(MdMoreVert).attrs({
  size: 20
})`
  color: ${theme('colors.white')};
`

export const Options = styled.ul`
  position: absolute;
  top: calc(100% + 2px);
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
