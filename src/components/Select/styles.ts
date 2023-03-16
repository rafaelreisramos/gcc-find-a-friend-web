import chevron from '@/assets/icons/chevron-bottom.svg'
import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FilterLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  &::after {
    content: '';
    height: 14px;
    width: 14px;
    position: absolute;
    right: 20px;
    background: url('${chevron}') no-repeat right center;
    pointer-events: none;
    color: #ffffff;
  }
`

export const FilterInput = styled.select`
  width: 100%;
  height: 60px;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 800;
  color: #ffffff;
  background-color: #f75f64;
  border-radius: 15px;
  border: none;
  outline: none;
  // 20px from padding + 14px width + 16px margin
  padding: 20px 50px 20px 20px;
  appearance: none;
`

export const FilterInputOption = styled.option`
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
`
