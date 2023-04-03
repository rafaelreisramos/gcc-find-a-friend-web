import { RouterProvider } from 'react-router-dom'

import GlobalStyles from './styles/global'
import { router } from './routes'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  )
}

export default App
