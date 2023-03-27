import { Link } from 'react-router-dom'

import { Container, Content } from './styles'

export function NotFound() {
  return (
    <Container>
      <Content>
        <h1>Página não encontrada</h1>

        <Link to="/">Voltar para a página inicial</Link>
      </Content>
    </Container>
  )
}
