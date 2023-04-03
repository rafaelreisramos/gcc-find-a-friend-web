import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 15px 40px;
  background: linear-gradient(
    129.72deg,
    rgba(247, 204, 95, 0.1) 16.45%,
    rgba(241, 81, 86, 0) 67.3%
  );
  border: 1px solid #f15156;
  border-radius: 10px;

  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #f15156;

  svg {
    height: 24px;
    width: 24px;
  }

  & + {
    margin-top: 10px;
  }
`

export const Title = styled.p`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  line-height: 90%;
  color: #0d3b66;
`
