import { useNavigate } from 'react-router-dom'

import heroImg from '@/assets/images/hero.png'

import { Logo } from '@/components/Logo'

import {
  Container,
  HeroTitle,
  ImageWrapper,
  SearchTitle,
  SearchBar,
  LogoWrapper,
} from './styles'

export function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <LogoWrapper>
        <Logo hideText={false} />
      </LogoWrapper>

      <HeroTitle>Leve a felicidade para o seu lar</HeroTitle>

      <ImageWrapper>
        <img src={heroImg} alt="cachorros" />
      </ImageWrapper>

      <SearchTitle>
        Encontre o animal de estimação ideal para seu estilo de vida!
      </SearchTitle>

      <SearchBar onSearch={() => navigate(`/map`)} />
    </Container>
  )
}
