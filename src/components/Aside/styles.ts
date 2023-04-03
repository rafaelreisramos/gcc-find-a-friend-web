import styled from 'styled-components'

import * as SearchBarStyles from '@/components/SearchBar/styles'
import VisuallyHidden from '@/styles/visuallyHidden'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #f15156;

  @media (min-width: 768px) {
    width: 392px;
    height: 100vh;
  }
`

export const AsideHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e44449;

  & > div {
    padding: 81px 56px 26px;
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  ${SearchBarStyles.Form} {
    flex-direction: column;
    gap: 30px;
  }

  ${SearchBarStyles.FormFieldset} {
    flex-direction: column;
    gap: 30px;
  }

  ${SearchBarStyles.FormLegend} {
    font-size: 20px;
    line-height: 34px;
  }

  ${SearchBarStyles.FormButton} {
    width: 100%;
  }

  ${SearchBarStyles.FormFieldset} {
    & > .first-select {
      max-width: 100%;
    }
  }

  ${SearchBarStyles.FormLegend} {
    ${VisuallyHidden}
  }
`

export const HeaderInput = styled.div`
  display: flex;
  gap: 12px;

  input {
    min-width: 203px;
    flex: 1;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    padding: 21px 16px;
    border-radius: 15px;
    background: transparent;
    border: 1px solid #f15156;
    outline: none;

    &::placeholder {
      color: #f2f2f2;
    }
  }
`

export const AsideContent = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 56px;
`

export const ContentHeader = styled.h1`
  font-size: 20px;
  line-height: 34px;
  margin-bottom: 27px;
`

export const ContentFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
