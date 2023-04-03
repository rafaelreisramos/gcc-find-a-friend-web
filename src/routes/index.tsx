import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Map } from '../pages/Map'
import { NotFound } from '../pages/404'

export const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="*" element={<NotFound />} />
    </>,
  ])
)
