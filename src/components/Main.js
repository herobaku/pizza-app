import { Container } from 'react-bootstrap'
import Filter from './Filter'
import Pizzas from './Pizzas'

function Main({data}) {
  return (
    <main className='py-3'>
      <Container>
        <Filter />
        <Pizzas data={data}/>
      </Container>
    </main>
  )
}

export default Main