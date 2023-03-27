import { ButtonHTMLAttributes, ReactNode } from 'react'

import whatsappImg from '@/assets/icons/whatsapp.svg'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  phone: string
}

export function WhatsappButton({ phone, children }: Props) {
  const handleClick = () => {
    const url = `https://wa.me/${phone}`
    window.open(url, '_blank')
  }

  return (
    <Container onClick={handleClick}>
      <img src={whatsappImg} alt="" />
      {children}
    </Container>
  )
}
