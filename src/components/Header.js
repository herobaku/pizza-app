import './Header.css'
import { Container, Button, Badge } from "react-bootstrap"
import { FaShoppingBasket } from "react-icons/fa"

function Header({handleShow}) {
  return (
    <header className="bg-warning py-3">
      <Container className="d-flex justify-content-between">
        <h1>Pizza App</h1>
        <Button variant="success" onClick={handleShow}>
          <FaShoppingBasket/> <Badge bg="white text-dark align-top">9</Badge>
        </Button>
      </Container>
    </header>
  )
}

export default Header