import { Row } from 'react-bootstrap'
import Pizza from './Pizza'

function Pizzas({data}) {
  return (
    <div id="pizzas" className='py-4'>
        <Row xs={1} md={2} xl={4} className="g-4">
            {data.map(pizza => (
                <Pizza key={pizza.id} pizza={pizza}/>
            ))}
        </Row>
    </div>
  )
}

export default Pizzas