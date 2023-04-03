import styled from 'styled-components'

import * as MapStyles from './components/Map/styles'

export const Container = styled.div`
  display: flex;
  height: 100%;
  background: #fdeced;
`

export const LateralBar = styled.div`
  position: fixed;
  max-width: 96px;
  height: 100vh;
  background: #f15156;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
`

export const PetInfoCard = styled.div`
  margin: auto;
  padding-left: 96px;
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #8fa7b3;
  margin-block: 40px;
`

export const PetInfoWrapper = styled.div`
  border-radius: 20px;
  background: white;
  overflow: hidden;
`

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 704px;
  padding: 70px;

  ${MapStyles.Container} {
    margin-top: 70px;
  }
`

export const HorizontalLine = styled.div`
  margin-top: 50px;
  border-top: 1px solid #d3e2e6;
  margin-bottom: 50px;
`

export const GalleryThumbnails = styled.div`
  display: flex;
  gap: 16px;
`

export const PetName = styled.h1`
  font-weight: 800;
  font-size: 54px;
  line-height: 90%;
  letter-spacing: -0.02em;
  color: #0d3b66;
`

export const PetDescription = styled.p`
  margin-top: 26px;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d3b66;
`
