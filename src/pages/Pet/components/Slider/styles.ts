import styled from 'styled-components'

export const Container = styled.div``

export const MainImage = styled.img`
  display: block;
  width: 100%;
  height: 336px;
  object-fit: cover;
`

export const Thumbnails = styled.div`
  display: flex;
  gap: 16px;
  padding-inline: 70px;
  margin-top: 70px;

  button {
    border: none;
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background: #ebf2f5;
    overflow: hidden;
    opacity: 0.3;
  }

  button.selected,
  button:hover,
  button:focus {
    opacity: 1;
    outline: 4px solid #0d3b66;
  }

  img {
    display: block;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
