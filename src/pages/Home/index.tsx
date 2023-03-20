import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

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

interface Selection {
  state: string
  city: string
}

export function Home() {
  const [states, setStates] = useState<State[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [selection, setSelection] = useState({} as Selection)

  async function handleSearchPets(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const response = await http.get(`/pets/${selection.city}`)
    console.log(response.data)
  }

  async function handleChangeState(e: ChangeEvent<HTMLSelectElement>) {
    const response = await http.get(`/location/citys/${e.target.value}`)
    setCities(response.data.citys)
    setSelection((prevState) => ({ ...prevState, state: e.target.value }))
  }

  function handleChangeCity(e: ChangeEvent<HTMLSelectElement>) {
    setSelection((prevState) => ({ ...prevState, city: e.target.value }))
  }

  useEffect(() => {
    async function fetchStates() {
      const response = await http.get('/location/states')
      setStates(response.data.states)
    }

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
            options={states.map((state) => ({
              value: state.sigla,
              label: state.sigla,
            }))}
            onChange={handleChangeState}
          />

          <FormSelect
            label="Cidade"
            hideLabel={true}
            name="city"
            options={cities.map((city) => ({
              value: city.name,
              label: city.name,
            }))}
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
