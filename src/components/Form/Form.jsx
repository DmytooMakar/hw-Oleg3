import { useState } from "react";
import { 
    Col, 
    Form,
    Row,
    Button,
} from "react-bootstrap";
import axios from "axios"

import "./Form.css"

function Forms({ setPosts, selectedPost, reload, setSelectedPost, setValueDescription, setValueName, valueName, valueDescription }) {

    const [error, setError] = useState(false);

    function patchBtn(){
        axios.put(`http://localhost:3001/posts/${selectedPost}`, {
            name: valueName,
            description: valueDescription
        })
        .then(res => {reload()
        setSelectedPost('')
        })
    }

    function submitTodo(){
        if(valueName.trim() === '' || valueName.length > 20){
                 alert('enter a valid value no more than 20 characters')
            return setError(true) 
        }
        axios.post('http://localhost:3001/posts', {
            name: valueName,
            description: valueDescription})
        .then(res => { setError(false)
        setPosts((prev) => [...prev, res.data])})   
    }


    return (<div className="form-container">
        <Form className="form">
            <Form.Group>
                <Row>
                    <Form.Label column sm="4">
                    Name:
                    </Form.Label>
                    <Col sm='7'>
                        <Form.Control value={valueName} 
                        onChange={e => setValueName(e.target.value)} className={error?'warning':''} 
                        size="sm" type="text" placeholder="Enter name" />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group >
                <Row>
                    <Form.Label column sm="4">
                    Description:
                    </Form.Label>
                    <Col sm='7'>
                        <Form.Control value={valueDescription} 
                        onChange={e => setValueDescription(e.target.value)} 
                        size="sm" type="text" placeholder="Enter description" />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
        <Button variant="primary" onClick={selectedPost?patchBtn:submitTodo}>Submit</Button>
    </div>
    )
}

export default Forms

