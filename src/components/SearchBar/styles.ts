import styled from 'styled-components'

import { Select as SelectComponent } from '@/components/Select'
import { Button as ButtonComponent } from '@/components/Button'

import * as SelectStyles from '@/components/Select/styles'
import VisuallyHidden from '@/styles/visuallyHidden'

// Use div because legend have some differences with position float Chrome/Safari
export const FormLegend = styled.div`
  font-weight: 400;
  font-size: 16px;
  flex-shrink: 0;
`

export const FormSelect = styled(SelectComponent)`
  width: 100%;

  ${SelectStyles.FilterLabel} {
    ${VisuallyHidden}
  }
`

export const FormFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 8px;

    & > .first-select {
      max-width: 144px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: max(592px, 100%);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`

export const FormButton = styled(ButtonComponent)`
  width: 100%;

  @media (min-width: 768px) {
    width: 62px;
  }
`
