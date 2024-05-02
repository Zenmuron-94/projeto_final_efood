import { FadeLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <FadeLoader color={cores.rose} />
  </Container>
)

export default Loader
