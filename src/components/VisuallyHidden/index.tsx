import { ReactNode } from 'react'

const hiddenStyles = {
  position: 'absolute' as const,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
}

type Props = {
  children: ReactNode
}

export function VisuallyHidden({ children, ...rest }: Props) {
  return (
    <span style={hiddenStyles} {...rest}>
      {children}
    </span>
  )
}
