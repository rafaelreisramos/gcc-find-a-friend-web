import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Content = styled.div`
  flex: 1;
  background-color: #fdeced;
  padding: 64px 32px 50px;

  height: 100vh;
  overflow-y: scroll;

  @media (min-width: 768px) {
    padding: 154px 32px 50px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;
  margin-bottom: 46px;

  p {
    font-size: 20px;
    line-height: 34px;
    font-weight: 400;
    color: #0d3b66;
  }

  span {
    font-weight: 800;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const SelectWrapper = styled.div`
  display: flex;
  position: relative;

  & > img {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`

export const HeaderSelect = styled.select`
  flex: 1;
  min-width: 210px;
  height: 48px;
  padding: 14px 18px;
  border: none;
  border-radius: 15px;
  background-color: #fbe1e2;

  outline: none;
  appearance: none;

  font-family: Nunito;
  font-size: 16px;
  color: #0d3b66;
`

export const Display = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 32px;
  grid-template-columns: repeat(1, minmax(280px, 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(280px, 1fr));
  }

  @media (min-width: 1366px) {
    grid-template-columns: repeat(3, minmax(280px, 1fr));
  }
`
