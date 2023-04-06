import { Modal, Button, Table } from 'react-bootstrap'

function Modals({show, handleClose}) {
    return(
        <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Sizin sifarisleriniz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table responsive="sm">
          <thead className='align-middle'>
            <tr>
              <th>№</th>
              <th>Şəkil</th>
              <th>Adı</th>
              <th>Ölçüsü</th>
              <th>Qiyməti</th>
              <th>Ədədi</th>
              <th>Yekun</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='align-middle'>
            <tr>
              <td>1</td>
              <td><img src="http://localhost:3000/assets/img/pizzas/american-hot.png" className="thumb" alt="pizza"></img></td>
              <td>Pizza</td>
              <td>mini</td>
              <td>10 azn</td>
              <td>2 ed</td>
              <td>20 azn</td>
              <td>X</td>
            </tr>
          </tbody>
        </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Modals;