import { useState, useEffect, FormEvent, ChangeEvent } from 'react'

import { http } from '@/api/http'
import { useLocalStorage } from '@/hooks/local-storage'

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'

import {
  Form,
  FormButton,
  FormFieldset,
  FormLegend,
  FormSelect,
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

interface Props {
  onSearch: () => void
}

export function SearchBar({ onSearch }: Props) {
  const [states, setStates] = useState<State[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [city, setCity] = useLocalStorage<string>('city', '')
  const [state, setState] = useLocalStorage<string>('state', '')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSearch()
  }

  useEffect(() => {
    async function fetchCities() {
      if (!state) return
      try {
        const response = await http.get(`/location/citys/${state}`)
        const cities = response.data.citys.map((city: City) => {
          return {
            value: city.name,
            label: city.name,
          }
        })
        setCities(cities)
      } catch (e) {
        console.log(e)
      }
    }

    fetchCities()
  }, [state])

  useEffect(() => {
    async function fetchStates() {
      try {
        const response = await http.get('/location/states')
        const states = response.data.states.map((state: State) => {
          return {
            label: state.sigla,
            value: state.sigla,
          }
        })
        setStates(states)
      } catch (e) {
        console.log(e)
      }
    }

    fetchStates()
  }, [])

  return (
    <Form onSubmit={handleSubmit}>
      <FormFieldset>
        <FormLegend>Busque um amigo:</FormLegend>
        <FormSelect
          className="first-select"
          label="Estado"
          name="state"
          options={states}
          value={state}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setState(e.target.value)
            setCity('')
          }}
        />

        <FormSelect
          label="Cidade"
          name="city"
          options={cities}
          value={city}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setCity(e.target.value)
          }
        />
      </FormFieldset>

      <FormButton
        type="submit"
        icon={<SearchIcon />}
        size="medium"
        disabled={!city || !state}
      />
    </Form>
  )
}
