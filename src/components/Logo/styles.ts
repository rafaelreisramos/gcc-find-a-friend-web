import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const containerModifiers = {
  small: () => css`
    svg {
      height: 45px;
    }
  `,

  large: () => css`
    svg {
      height: 56px;
    }
  `,

  hideText: () => css`
    .text {
      display: none;
    }
  `,
}

export const Container = styled.div<LogoProps>`
  svg {
    width: auto;
  }

  ${({ size, color, hideText }) => css`
    color: ${color};
    ${!!size && containerModifiers[size]}
    ${!!hideText && containerModifiers.hideText}
  `}
`
