import { ButtonHTMLAttributes } from 'react'

import logo from '@/assets/icons/logo.svg'

import { Container, Name, PetImage, TypeIcon } from './styles'

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  path: string
  name: string
  petType: 'dog' | 'cat'
}

export function Card({ path, name, petType, ...props }: CardProps) {
  return (
    <Container type="button" {...props}>
      <PetImage>
        <img src={path} alt={`Foto de ${name}`} />
      </PetImage>
      <div>
        <TypeIcon>
          <div
            style={{
              backgroundColor: petType === 'cat' ? '#F4D35E' : '#F15156',
            }}
          >
            <img src={logo} alt="" />
          </div>
        </TypeIcon>
        <Name>{name}</Name>
      </div>
    </Container>
  )
}
