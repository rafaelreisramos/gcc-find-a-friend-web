import styled from 'styled-components'

import { MapContainer as ReactLeafletMap } from 'react-leaflet'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #0d3b66;
  border: 1px solid #b3dae2;
  border-radius: 20px;
  overflow: hidden;

  height: 352px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  a {
    margin-top: auto;
    padding-bottom: 16px;
    text-decoration: none;
    color: #f4d35e;
  }
`

export const MapContainer = styled(ReactLeafletMap)`
  width: 100%;
  height: 290px;

  border-radius: 20px;
`
