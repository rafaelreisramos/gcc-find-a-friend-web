import { ChangeEvent, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { http } from '@/api/http'

import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'

type PetType = 'dog' | 'cat'

export interface Pet {
  id: string
  age: string
  energy: number
  independence: string
  name: string
  photo_url: string
  size: string
  type: PetType
}

export function Map() {
  const [pets, setPets] = useState<Pet[]>([])
  const [petType, setPetType] = useState<PetType | 'all'>('all')
  const [petsFiltered, setPetsFiltered] = useState<Pet[]>([])

  const {
    state: { city },
  } = useLocation()

  function handleFilterByPetType(e: ChangeEvent<HTMLSelectElement>) {
    setPetType(e.target.value as PetType | 'all')
  }

  async function fetchPets(city: string, searchParams = '') {
    const response = await http.get(`/pets/${city}?${searchParams}`)
    const pets = response.data.pets.map((pet: Pet) => {
      return {
        id: pet.id,
        age: pet.age,
        energy: pet.energy,
        independence: pet.independence,
        name: pet.name,
        photo_url: pet.photo_url,
        size: pet.size,
        type: pet.type,
      }
    })
    setPets(pets)
    setPetsFiltered(pets)
  }

  useEffect(() => {
    fetchPets(city)
  }, [city])

  useEffect(() => {
    const filtered =
      petType === 'all' ? pets : pets.filter((pet) => pet.type === petType)
    setPetsFiltered(filtered)
  }, [petType, pets])

  return (
    <Container>
      <Aside city={city} fetchPets={fetchPets} />

      <Content>
        <Header>
          <p>
            Encontre <span>{petsFiltered.length} amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              name="size"
              id="size"
              onChange={handleFilterByPetType}
            >
              <option value="all">Gatos e Cachorros</option>
              <option value="cat">Gatos</option>
              <option value="dog">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {petsFiltered.length > 0 &&
            petsFiltered.map((pet: Pet) => (
              <Card
                key={pet.id}
                path={pet.photo_url}
                type={pet.type}
                name={pet.name}
              />
            ))}
        </Display>
      </Content>
    </Container>
  )
}
