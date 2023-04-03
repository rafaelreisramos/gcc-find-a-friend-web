import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

export type ContainerProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
>

const containerModifiers = {
  small: () => css`
    height: 48px;
  `,

  medium: () => css`
    height: 60px;
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: () => css`
    svg {
      width: 24px;
      & + span {
        margin-left: 16px;
      }
    }
  `,
}

export const Container = styled.button<ContainerProps>`
  ${({ size, fullWidth, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #f4d35e;
    border: none;
    cursor: pointer;
    padding: 12px;
    border-radius: 15px;
    transition: filter 0.2s;

    text-decoration: none;
    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }

    ${!!size && containerModifiers[size]()};
    ${fullWidth && containerModifiers.fullWidth()};
    ${hasIcon && containerModifiers.withIcon()};
  `}
`
