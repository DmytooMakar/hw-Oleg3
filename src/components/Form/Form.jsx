import { useRef } from "react";
import { 
    Col, 
    Form,
    Row,
    Button,
} from "react-bootstrap";
import axios from "axios"

import "./Form.css"

function Forms() {

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);


    function submitTodo(){
        
        axios.post('http://localhost:3001/posts', {
            name: nameRef.current.value,
            description: descriptionRef.current.value
        })
        .then(res => console.log(res))

    }

    


    return (<div className="form-container">
        <Form className="form">
            <Form.Group>
                <Row>
                    <Form.Label column sm="4">
                    Name:
                    </Form.Label>
                    <Col sm='7'>
                        <Form.Control ref={nameRef} size="sm" type="text" placeholder="Enter name" />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group >
                <Row>
                    <Form.Label column sm="4">
                    Description:
                    </Form.Label>
                    <Col sm='7'>
                        <Form.Control ref={descriptionRef} size="sm" type="text" placeholder="Enter description" />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
        <Button variant="primary" onClick={submitTodo}>Submit</Button>
    </div>
    )
}

export default Forms

