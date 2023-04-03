import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: #f27006;
  border-radius: 15px;

  img {
    width: 28px;
    height: 28px;
  }
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #0d3b66;

  p {
    font-weight: 700;
    font-size: 30px;
    line-height: 90%;
  }

  address {
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    line-height: 28px;
  }
`

export const PhoneLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 59, 102, 0.05);
  padding: 12px 24px;
  border-radius: 10px;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    color: #0d3b66;
    line-height: 28px;
  }
`
