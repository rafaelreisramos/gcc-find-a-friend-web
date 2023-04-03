import phoneImg from '@/assets/icons/phone.svg'
import logoImg from '@/assets/icons/logo.svg'

import { Address, Container, ImageWrapper, PhoneLinkWrapper } from './styles'

function formatPhoneNmber(phone: string): string {
  return phone
    .replace(/^\+55/, '')
    .trim()
    .replace(/(\d{2})(\d{4,5})(\d{4})/, '$1 $2.$3')
}

export interface Org {
  id: string
  nome: string
  address: string
  cep: string
  whatsappNumber: string
}

interface Props {
  org: Org
}

export function Org({ org: { nome, address, whatsappNumber } }: Props) {
  return (
    <Container>
      <ImageWrapper>
        <img src={logoImg} alt="" />
      </ImageWrapper>
      <Address>
        <p>{nome}</p>
        <address>{address}</address>
        <PhoneLinkWrapper>
          <img src={phoneImg} alt="" />
          <a href={`tel:${whatsappNumber}`}>
            {formatPhoneNmber(whatsappNumber)}
          </a>
        </PhoneLinkWrapper>
      </Address>
    </Container>
  )
}
