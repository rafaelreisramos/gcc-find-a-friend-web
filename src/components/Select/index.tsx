import { ComponentProps } from 'react'
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from './styles'

type SelectProps = ComponentProps<typeof FilterInput> & {
  label: string
  name: string
  options: {
    value: string | number
    label: string
  }[]
  className?: string
  value: string | number
}

export function Select({
  label,
  name,
  options,
  onChange,
  className = '',
  value,
}: SelectProps) {
  return (
    <Filter className={className}>
      <FilterLabel htmlFor={name}>{label}</FilterLabel>
      <FilterWrapper>
        <FilterInput name={name} id={name} onChange={onChange} value={value}>
          <FilterInputOption value="">Selecione</FilterInputOption>
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
