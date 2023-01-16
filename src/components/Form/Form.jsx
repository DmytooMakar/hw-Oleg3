import { useState } from "react";
import { 
    Col, 
    Form,
    Row,
    Button,
} from "react-bootstrap";
import axios from "axios"

import "./Form.css"

function Forms({ setPosts, selectedPost, reload, setSelectedPost }) {

    const [error, setError] = useState(false);
    const [valueName, setValueName] = useState('');
    const [valueDescription, setValueDescription ] = useState(null);

    function patchBtn(){
        axios.put(`http://localhost:3001/posts/${selectedPost.id}`, {
            name: valueName,
            description: valueDescription
        })
        .then(res => {reload()
        setSelectedPost(null)
        })
    }

    function submitTodo(){
        if(valueName.trim() === '' || valueName.length > 20){     
            return (setError(true), alert('enter a valid value no more than 20 characters'))
        }
        axios.post('http://localhost:3001/posts', {
                name: valueName,
                description: valueDescription})
            .then(res => { setError(false)
                setPosts((prev) => [...prev, res.data])})
            
    }


    return (<div id="form-container" className="form-container">
        <Form className="form">
            <Form.Group>
                <Row>
                    <Form.Label column sm="4">
                    Name:
                    </Form.Label>
                    <Col sm='7'>
                        <Form.Control defaultValue={selectedPost?selectedPost.name:undefined} onChange={e => setValueName(e.currentTarget.value)} className={error?'warning':''} size="sm" type="text" placeholder="Enter name" />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group >
                <Row>
                    <Form.Label column sm="4">
                    Description:
                    </Form.Label>
                    <Col sm='7'>
                        <Form.Control defaultValue={selectedPost?selectedPost.description:undefined} onChange={e => setValueDescription(e.currentTarget.value)} size="sm" type="text" placeholder="Enter description" />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
        <Button variant="primary" onClick={selectedPost?patchBtn:submitTodo}>Submit</Button>
        
    </div>
    )
}

export default Forms

