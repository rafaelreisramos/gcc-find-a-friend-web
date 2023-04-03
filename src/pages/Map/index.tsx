import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { http } from '@/api/http'
import { useLocalStorage } from '@/hooks/local-storage'

import { Aside } from '~/Aside'
import { Card } from '~/Card'
import { Pet } from '../Pet'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'

export type PetType = 'dog' | 'cat'

export function Map() {
  const [pets, setPets] = useState<Pet[]>([])
  const [petsFiltered, setPetsFiltered] = useState<Pet[]>([])
  const [type, setType] = useState('all')

  const [city] = useLocalStorage('city', '')
  const navigate = useNavigate()

  useEffect(() => {
    if (!city) return
    async function fetchPets() {
      try {
        const response = await http.get(`pets/${city}`)
        setPets(response.data.pets)
        setPetsFiltered(response.data.pets)
      } catch (e) {
        console.log(e)
      }
    }

    fetchPets()
  }, [city])

  function handlePetDetails(id: string) {
    navigate(`/pet/show/${id}`)
  }

  return (
    <Container>
      <Aside
        pets={pets}
        updatePets={setPets}
        filterPets={setPetsFiltered}
        type={type}
      />

      <Content>
        <Header>
          <p>
            Encontre <span>{petsFiltered.length} amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              name="size"
              id="size"
              onChange={(e) => setType(e.target.value)}
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
            petsFiltered.map((pet) => (
              <Card
                key={pet.id}
                path={pet.photo_url}
                petType={pet.type}
                name={pet.name}
                onClick={() => handlePetDetails(pet.id)}
              />
            ))}
        </Display>
      </Content>
    </Container>
  )
}
