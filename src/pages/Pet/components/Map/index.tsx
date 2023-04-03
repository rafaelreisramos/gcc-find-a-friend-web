import { useEffect, useState } from 'react'
import { TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import { http } from '@/api/http'

import pinImg from '@/assets/icons/pin.svg'

import { Org } from '@/components/Org'

import { Container, MapContainer } from './styles'

interface Props {
  org: Org
}

interface Coordinates {
  latitude: number
  longitude: number
}

const Pin = Leaflet.icon({
  iconUrl: pinImg,
  iconSize: [65, 72],
  iconAnchor: [32, 72],
  popupAnchor: [0, -72],
})

export function Map({ org }: Props) {
  const [coordinates, setCoordinates] = useState<Coordinates>({} as Coordinates)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchCoordinates() {
      try {
        setIsLoading(true)
        const response = await http.get(`/location/coordinates/${org.cep}`)
        const { latitude, longitude } = response.data.coordinates
        setCoordinates({
          latitude: Number(latitude),
          longitude: Number(longitude),
        })
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCoordinates()
  }, [org.cep])

  if (isLoading) return <h1>Carregando...</h1>

  return (
    <Container>
      <MapContainer
        center={[coordinates.latitude, coordinates.longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={Pin}
          position={[coordinates.latitude, coordinates.longitude]}
        >
          <Popup>{org.nome}</Popup>
        </Marker>
      </MapContainer>
      <a
        target="_blank"
        href={`https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`}
        rel="noreferrer"
      >
        Ver rotas no Google Maps
      </a>
    </Container>
  )
}
