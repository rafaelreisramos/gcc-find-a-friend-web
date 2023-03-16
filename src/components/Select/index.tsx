import { ComponentProps } from 'react'
import { VisuallyHidden } from '../VisuallyHidden'
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from './styles'

type SelectProps = ComponentProps<typeof FilterInput> & {
  label: string
  hideLabel?: boolean
  name: string
  options: {
    value: string | number
    label: string
  }[]
  className?: string
}

export function Select({
  label,
  name,
  options,
  onChange,
  hideLabel = false,
  className = '',
}: SelectProps) {
  return (
    <Filter className={className}>
      {hideLabel ? (
        <VisuallyHidden>
          <FilterLabel htmlFor={name}>{label}</FilterLabel>
        </VisuallyHidden>
      ) : (
        <FilterLabel htmlFor={name}>{label}</FilterLabel>
      )}
      <FilterWrapper>
        <FilterInput name={name} id={name} onChange={onChange}>
          <FilterInputOption value="" disabled>
            Selecione
          </FilterInputOption>
          {options.map((option) => {
            return (
              <FilterInputOption key={option.value} value={option.value}>
                {option.label}
              </FilterInputOption>
            )
          })}
        </FilterInput>
      </FilterWrapper>
    </Filter>
  )
}
