/**
 * From: https://github.com/uidotdev/usehooks
 */

import { useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(`@find-a-friend/${key}`)
      return item ? JSON.parse(item) : initialValue
    } catch (e) {
      console.log(e)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          `@find-a-friend/${key}`,
          JSON.stringify(valueToStore)
        )
      }
    } catch (e) {
      console.log(e)
    }
  }
  return [storedValue, setValue] as const
}
