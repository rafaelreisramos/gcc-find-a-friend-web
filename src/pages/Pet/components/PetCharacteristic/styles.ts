import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 43px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid rgba(13, 59, 102, 0.1);
  padding: 24px;
  border-radius: 20px;
  height: 106px;
  color: #0d3b66;

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  gap: 2px;
  height: 24px;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }
`
