import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium'
  fullWidth?: boolean
  icon?: ReactNode
  minimal?: boolean
} & ButtonTypes

export const Button = ({
  children,
  icon,
  size = 'small',
  fullWidth = false,
  minimal = false,
  ...props
}: ButtonProps) => (
  <Container size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </Container>
)
