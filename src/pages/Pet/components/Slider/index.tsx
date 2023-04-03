import { useEffect, useState } from 'react'

import { Container, MainImage, Thumbnails } from './styles'
import { http } from '@/api/http'
import { Pet } from '../..'

interface Photo {
  id: string
  image: string
  petId: string
  photo_url: string
}

interface Props {
  pet: Pet
}

export function Slider({ pet }: Props) {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true)
        const response = await http.get(`/pets/gallery/${pet.id}`)
        setPhotos(response.data.pet_gallery)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPhotos()
  }, [pet.id])

  if (isLoading) return <h1>Carregando...</h1>

  return (
    <Container>
      <MainImage src={photos[selected].photo_url} alt={`Foto do ${pet.name}`} />

      <Thumbnails>
        {photos.length > 0 &&
          photos.map((photo, index) => (
            <button
              type="button"
              key={photo.id}
              onClick={() => setSelected(index)}
              className={`${index === selected ? 'selected' : ''}`}
            >
              <img
                src={photo.photo_url}
                alt={`Foto ${index + 1} de ${pet.name}`}
              />
            </button>
          ))}
      </Thumbnails>
    </Container>
  )
}
