import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { http } from '@/api/http'

import heroImg from '@/assets/images/hero.png'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'

import {
  Container,
  HeroTitle,
  Logo,
  ImageWrapper,
  SearchTitle,
  Form,
  FormLegend,
  FormFieldset,
  FormSelect,
  FormButton,
} from './styles'

interface State {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

interface City {
  code: string
  name: string
}

export function Home() {
  const [states, setStates] = useState<State[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const navigate = useNavigate()

  async function fetchCities(state: string) {
    const response = await http.get(`/location/citys/${state}`)
    const cities = response.data.citys.map((city: City) => {
      return {
        value: city.name,
        label: city.name,
      }
    })
    setCities(cities)
  }

  async function handleChangeState(e: ChangeEvent<HTMLSelectElement>) {
    const state = e.target.value
    setState(state)
    await fetchCities(state)
  }

  function handleChangeCity(e: ChangeEvent<HTMLSelectElement>) {
    setCity(e.target.value)
  }

  function handleSearchPets() {
    navigate('/map', {
      state: {
        city,
      },
    })
  }

  async function fetchStates() {
    const response = await http.get('/location/states')
    const states = response.data.states.map((state: State) => {
      return {
        label: state.sigla,
        value: state.sigla,
      }
    })
    setStates(states)
  }

  useEffect(() => {
    fetchStates()
  }, [])

  return (
    <Container>
      <Logo />

      <HeroTitle>Leve a felicidade para o seu lar</HeroTitle>

      <ImageWrapper>
        <img src={heroImg} alt="cachorros" />
      </ImageWrapper>

      <SearchTitle>
        Encontre o animal de estimação ideal para seu estilo de vida!
      </SearchTitle>

      <Form onSubmit={handleSearchPets}>
        <FormFieldset>
          <FormLegend>Busque um amigo:</FormLegend>
          <FormSelect
            label="Estado"
            hideLabel={true}
            name="state"
            options={states}
            value={state}
            onChange={handleChangeState}
          />

          <FormSelect
            label="Cidade"
            hideLabel={true}
            name="city"
            options={cities}
            value={city}
            onChange={handleChangeCity}
          />
        </FormFieldset>

        <FormButton type="submit">
          {/* Buscar PETs */}
          <SearchIcon />
        </FormButton>
      </Form>
    </Container>
  )
}
