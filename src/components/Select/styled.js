import styled from 'styled-components'
import { theme, ifProp, withProp } from 'styled-tools'
import { transparentize } from 'polished'
import { MdKeyboardArrowDown } from 'react-icons/md'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  margin-bottom: ${theme('spacing.xs')};
  font-size: ${theme('font.sm')};
  color: ${theme('colors.text')};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  padding: 0 ${theme('spacing.sm')};
  background-color:
      ${ifProp('error',
        withProp(theme('colors.danger'), transparentize(0.92)),
        theme('colors.grey')
      )}
    ;
  border: ${theme('border.primary')};
  border-radius: ${theme('radius.xs')};
  user-select: none;
  cursor: pointer;
`

export const Value = styled.span`
  font-size: ${theme('font.sm')};
  color: ${ifProp('selected',
    theme('colors.text'),
    theme('colors.placeholder')
  )};
`

export const Arrow = styled(MdKeyboardArrowDown).attrs({
  size: 22
})`
  color: ${theme('colors.text')};
  transform: ${ifProp('visible', 'rotate(180deg)', 0)};
`

export const Error = styled.span`
  margin-top: ${theme('spacing.xs')};
  font-size: ${theme('font.sm')};
  color: ${theme('colors.danger')};
`

export const Options = styled.ul`
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${theme('colors.grey')};
  border: ${theme('border.primary')};
  border-radius: ${theme('radius.xs')};
`

export const Option = styled.li`
  display: flex;
  align-items: center;
  height: 46px;
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
