import styled from 'styled-components'

import { SearchBar as SearchBarComponent } from '@/components/SearchBar'

export const Container = styled.div`
  display: grid;
  place-content: center;
  margin: auto;
  padding: 64px 32px;
  gap: 64px 64px;
  max-width: 1280px;
  height: 100%;

  @media (min-width: 1152px) {
    gap: 16px 64px;
    height: 100vh;
    grid-template-columns: max-content 592px;
    grid-template-rows: max-content 305px max-content;
  }
`

export const LogoWrapper = styled.div`
  justify-self: center;

  @media (min-width: 1152px) {
    justify-self: start;
    grid-row: 1;
    grid-column: 1/3;
  }
`

export const ImageWrapper = styled.div`
  img {
    width: min(592px, 100%);
    height: auto;
    border-radius: 30px;
  }

  justify-self: center;

  @media (min-width: 1152px) {
    grid-column: 2/3;
    grid-row: 2;
  }
`

export const HeroTitle = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.02em;

  @media (min-width: 1152px) {
    grid-column: 1/2;
    grid-row: 2;
    align-self: end;

    max-width: 464px;
    text-align: left;
    font-size: 72px;
    line-height: 90%;
  }
`

export const SearchTitle = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;

  @media (min-width: 1152px) {
    grid-column: 1/2;
    grid-row: 3;

    padding: 112px 0;
    max-width: 408px;
    text-align: left;
    font-size: 24px;
    line-height: 34px;
  }
`

export const SearchBar = styled(SearchBarComponent)``
