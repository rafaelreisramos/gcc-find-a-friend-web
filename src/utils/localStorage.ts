export const getLocalStorage = (key: string) => {
  if (typeof window === 'undefined') {
    return ''
  }
  try {
    const item = window.localStorage.getItem(`@find-a-friend/${key}`)
    return item ? JSON.parse(item) : ''
  } catch (e) {
    console.log(e)
    return ''
  }
}
