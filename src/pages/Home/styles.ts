import styled from 'styled-components'

import { Select as SelectComponent } from '@/components/Select'
import { ReactComponent as LogoSVG } from '@/assets/icons/logo-with-name.svg'

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
export const Logo = styled(LogoSVG)`
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

export const FormButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 16px;
  background: #f4d35e;
  border-radius: 20px;

  svg {
    width: 24px;
    height: 24px;
  }
`

export const FormSelect = styled(SelectComponent)``

// Use div because legend have some differences with position float Chrome/Safari
export const FormLegend = styled.div`
  font-weight: 400;
  font-size: 16px;

  @media (min-width: 1152px) {
    flex-shrink: 0;
    flex-basis: 136px;
  }
`
export const FormFieldset = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 1152px) {
    gap: 8px;
    flex-direction: row;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  ${FormSelect}, ${FormButton} {
    width: 100%;
  }

  @media (min-width: 1152px) {
    grid-column: 2/3;
    grid-row: 3;

    flex-direction: row;

    ${FormSelect}:nth-of-type(2) {
      flex-basis: 96px;
    }

    ${FormSelect}:nth-of-type(3) {
      flex: 1;
      flex-basis: 200px;
    }

    ${FormButton} {
      width: auto;
      height: 72px;
    }
  }
`
