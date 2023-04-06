import { Component } from "react"
import { Col, Card, Button, Form } from "react-bootstrap"

class Pizza extends Component {
    constructor(props) {
        super(props)
        this.state = {
            size: Object.keys(this.props.pizza.size)[0],
        }
        this.sizeChanges = this.sizeChanges.bind(this)
    }
    
    sizeChanges(e) {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        const { name, img, desc, size: sizeObj, price } = this.props.pizza;
        const { size } = this.state;
        const path = "/assets/img/pizzas/";
    return (
            <Col>
                <Card>
                    <Card.Img variant="top" src={path+img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="card__text_line">{desc}</Card.Text>
                    <div className="d-flex py-3">
                    <Form.Select onChange={this.sizeChanges}>
                        {Object.keys(sizeObj).map(item => (
                            <option key={item} value={item}>{sizeObj[item]}</option>
                        ))}
                    </Form.Select>
                    <span className="w-50 fs-2 text-end">{price[size]}&#8380;</span>
                    </div>
                    <Button variant="warning" className="bg-warning">Sifariş et</Button>
                    </Card.Body>
                </Card>
            </Col>
          )
        }
    }

export default Pizza