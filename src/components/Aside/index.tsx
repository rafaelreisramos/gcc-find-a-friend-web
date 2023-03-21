import { ChangeEvent, useState } from 'react'

import { Select } from '@/components/Select'

import logo from '@/assets/icons/logo.svg'
import search from '@/assets/icons/search.svg'

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

type Props = {
  city: string
  fetchPets: (city: string, searchParams: string) => Promise<void>
}

export function Aside({ city, fetchPets }: Props) {
  const [filter, setFilter] = useState({
    age: '',
    energy: 0,
    size: '',
    independency: '',
  })

  function handleSearchPets() {
    let searchParams = ''
    for (const [key, value] of Object.entries(filter)) {
      if (value) {
        searchParams += `${key}=${value}&`
      }
    }

    fetchPets(city, searchParams)
  }

  async function handleChangeSearchFilters(
    // eslint-disable-next-line prettier/prettier
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <input
              type="text"
              placeholder="Insira uma cidade"
              value={city}
              readOnly
            />
            <button onClick={handleSearchPets}>
              <img src={search} alt="ícone de lupa" />
            </button>
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
            name="independency"
            label="Nível de independência"
            options={independencyOptions}
            value={filter.independency}
            onChange={handleChangeSearchFilters}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
