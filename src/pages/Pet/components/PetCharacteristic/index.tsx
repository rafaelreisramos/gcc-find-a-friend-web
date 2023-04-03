import { Container, Card, ImageWrapper, ImageContainer } from './styles'

import lightningImg from '@/assets/icons/lightning.svg'
import lightningFilledImg from '@/assets/icons/lightning-filled.svg'
import maximizeImg from '@/assets/icons/maximize.svg'
import circleImg from '@/assets/icons/circle.svg'
import circleFilledImg from '@/assets/icons/circle-filled.svg'

const energyLevels: { [key: number]: string } = {
  1: 'Baixa energia',
  2: 'Pouca energia',
  3: 'Média energia',
  4: 'Muita energia',
  5: 'Alta energia',
}

const sizes: { [key: string]: string } = {
  small: 'Pequenino',
  medium: 'Mediano',
  big: 'Grande',
}

const environments: { [key: string]: string } = {
  small: 'Ambiente pequeno',
  medium: 'Ambiente médio',
  big: 'Ambiente amplo',
}

export function getPetEnergy(energyLevel: number): string {
  return energyLevels[energyLevel] || 'Não definido'
}

export function getPetSize(size: string): string {
  return sizes[size] || 'Não definido'
}

export function getPetEnvironment(size: string): string {
  return environments[size] || 'Não definido'
}

export function characteristicImages({
  image,
  filledImage,
  times,
  maxImages,
}: {
  image: string
  filledImage: string
  times: number
  maxImages: number
}) {
  const images = []
  for (let i = 0; i < times; i++) {
    images.push(filledImage)
  }
  for (let i = images.length; i < maxImages; i++) {
    images.push(image)
  }

  return images
}

interface Props {
  energy: number
  size: string
}

export function PetCharacteristics({ energy, size }: Props) {
  const petEnergyLevel = getPetEnergy(energy)
  const petSize = getPetSize(size)
  const petEnvironment = getPetEnvironment(size)

  const sizeInNumber = { small: 1, medium: 2, big: 3 }[size] || 0

  const petEnergyImages = characteristicImages({
    filledImage: lightningImg,
    image: lightningFilledImg,
    times: energy,
    maxImages: Object.keys(energyLevels).length,
  })

  const petSizeImages = characteristicImages({
    filledImage: circleFilledImg,
    image: circleImg,
    times: sizeInNumber,
    maxImages: Object.keys(sizes).length,
  })

  return (
    <Container>
      <Card>
        <ImageContainer>
          {petEnergyImages.length > 0 &&
            petEnergyImages.map((image, index) => (
              <ImageWrapper key={index}>
                <img src={image} alt="image" />
              </ImageWrapper>
            ))}
        </ImageContainer>
        <p>{petEnergyLevel}</p>
      </Card>

      <Card>
        <ImageContainer>
          <ImageWrapper>
            <img src={maximizeImg} alt="image" />
          </ImageWrapper>
        </ImageContainer>
        <p>{petEnvironment}</p>
      </Card>

      <Card>
        <ImageContainer>
          {petSizeImages.length > 0 &&
            petSizeImages.map((image, index) => (
              <ImageWrapper key={index}>
                <img src={image} alt="image" />
              </ImageWrapper>
            ))}
        </ImageContainer>
        <p>{petSize}</p>
      </Card>
    </Container>
  )
}
