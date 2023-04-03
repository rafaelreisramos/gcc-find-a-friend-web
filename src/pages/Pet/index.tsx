import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { http } from '@/api/http'

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow-left.svg'

import { Button } from '~/Button'
import { WhatsappButton } from '~/WhatsappButton'
import { Org } from '~/Org'

import { PetCharacteristics } from './components/PetCharacteristic'
import { AdoptionRequirements } from './components/AdoptionRequirements'
import { Map } from './components/Map'
import { Slider } from './components/Slider'

import {
  Container,
  LateralBar,
  PetInfoCard,
  PetInfoWrapper,
  PetInfo,
  PetName,
  PetDescription,
  HorizontalLine,
  Title,
} from './styles'
import { Logo } from '@/components/Logo'

export interface Pet {
  id: string
  name: string
  description: string
  city: string
  age: string
  energy: number
  size: string
  independence: string
  type: 'dog' | 'cat'
  photo: string
  orgId: string
  org: Org
  photo_url: string
}

export function Pet() {
  const [pet, setPet] = useState<Pet>()
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams() as { id: string }

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPet(petId: string) {
      try {
        setIsLoading(true)
        const response = await http.get(`/pets/show/${petId}`)
        setPet(response.data.pet)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPet(id)
  }, [id])

  if (isLoading) return <h1>Carregando...</h1>

  return (
    <Container>
      <LateralBar>
        <Logo />
        <Button
          type="button"
          icon={<ArrowLeft />}
          onClick={() => navigate(-1)}
        />
      </LateralBar>

      <PetInfoCard>
        <Title>Seu novo amigo</Title>

        {!!pet && (
          <PetInfoWrapper>
            <Slider pet={pet} />

            <PetInfo>
              <PetName>{pet.name}</PetName>

              <PetDescription>{pet.description}</PetDescription>

              <PetCharacteristics size={pet.size} energy={pet.energy} />

              <Map org={pet.org} />

              <HorizontalLine />

              <Org org={pet.org} />

              <HorizontalLine />

              <AdoptionRequirements petId={pet.id} />

              <HorizontalLine />

              <WhatsappButton phone={pet.org.whatsappNumber}>
                Entre em contato
              </WhatsappButton>
            </PetInfo>
          </PetInfoWrapper>
        )}
      </PetInfoCard>
    </Container>
  )
}
