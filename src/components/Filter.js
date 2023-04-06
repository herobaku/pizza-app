import { Form } from 'react-bootstrap'

function Filter() {
  return (
    <div id="filter" className='border p-4 rounded'>
        <Form.Label htmlFor="search">Search</Form.Label>
        <Form.Control type="text" id="search" />
    </div>
  )
}

export default Filter