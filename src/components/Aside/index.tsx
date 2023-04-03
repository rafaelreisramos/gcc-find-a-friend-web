import { ChangeEvent, useEffect, useState } from 'react'

import { http } from '@/api/http'
import { useLocalStorage } from '@/hooks/local-storage'
import { getLocalStorage } from '@/utils/localStorage'

import { Pet } from '@/pages/Pet'

import { Select } from '../Select'
import { SearchBar } from '../SearchBar'
import { Logo } from '../Logo'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

interface Filter {
  age: string
  energy: number
  size: string
  independence: string
  type: string
}

interface Props {
  pets: Pet[]
  updatePets: (pets: Pet[]) => void
  filterPets: (pets: Pet[]) => void
  type: string
}

export function Aside({ pets, type, filterPets, updatePets }: Props) {
  const [filter, setFilter] = useState<Filter>({
    age: '',
    energy: 0,
    size: '',
    independence: '',
    type: 'all',
  })

  const [url, setUrl] = useState('')
  let [city] = useLocalStorage('city', '')

  function handleSearchPets() {
    let searchParams = ''
    for (const [key, value] of Object.entries(filter)) {
      if (value) {
        searchParams += `${key}=${value}&`
      }
    }
    city = getLocalStorage('city')
    setUrl(`/pets/${city}?${searchParams}`)
  }

  async function handleChangeSearchFilters(
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    setFilter((prevState) => ({
      ...prevState,
      type,
    }))
  }, [type])

  useEffect(() => {
    let filteredPets = pets.filter((pet) => {
      if (filter.age !== '' && pet.age !== filter.age) return false
      if (Number(filter.energy) !== 0 && pet.energy !== Number(filter.energy))
        return false
      if (filter.size !== '' && pet.size !== filter.size) return false
      if (
        filter.independence !== '' &&
        pet.independence !== filter.independence
      )
        return false
      return true
    })
    if (filter.type !== 'all') {
      filteredPets = filteredPets.filter((pet) => pet.type === filter.type)
    }

    filterPets(filteredPets)
  }, [filter, filterPets, pets])

  useEffect(() => {
    if (!url) return
    async function fetchPets() {
      try {
        const response = await http.get(url)
        updatePets(response.data.pets)
        filterPets(response.data.pets)
      } catch (e) {
        console.log(e)
      }
    }

    fetchPets()
  }, [filterPets, updatePets, url])

  return (
    <Container>
      <AsideHeader>
        <div>
          <Logo size="small" hideText={true} />
          <HeaderInput>
            <SearchBar onSearch={handleSearchPets} />
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select
            name="age"
            label="Idade"
            options={ageOptions}
            value={filter.age}
            onChange={handleChangeSearchFilters}
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            value={filter.energy}
            onChange={handleChangeSearchFilters}
          />

          <Select
            name="size"
            label="Porte do animal"
            options={sizeOptions}
            value={filter.size}
            onChange={handleChangeSearchFilters}
          />

          <Select
            name="independence"
            label="Nível de independência"
            options={independencyOptions}
            value={filter.independence}
            onChange={handleChangeSearchFilters}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
