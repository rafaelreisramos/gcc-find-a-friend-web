import { useEffect, useState } from 'react'
import { http } from '@/api/http'

import { ReactComponent as Alert } from '@/assets/icons/alert.svg'

import { Container, Title } from './styles'

interface Props {
  petId: string
}

interface Requirement {
  id: string
  title: string
}

export function AdoptionRequirements({ petId }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [requirements, setRequirements] = useState<Requirement[]>([])

  useEffect(() => {
    async function fetchRequirements() {
      try {
        setIsLoading(true)
        const response = await http.get(`/pets/adoption-requirements/${petId}`)
        setRequirements(response.data.adoption_requirements)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRequirements()
  }, [petId])

  if (isLoading) return <h1>Carregando...</h1>

  return (
    <>
      <Title>Requisitos para adoção</Title>

      {requirements.length > 0 &&
        requirements.map((requirement) => (
          <Container key={requirement.id}>
            <Alert />
            {requirement.title}
          </Container>
        ))}
    </>
  )
}
