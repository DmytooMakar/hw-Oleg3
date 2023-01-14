import { useRef, useState } from "react";
import { 
    Col, 
    Form,
    Row,
    Button,
} from "react-bootstrap";
import axios from "axios"

import "./Form.css"

function Forms({ setPosts, selectedPost, reload, setSelectedPost }) {

    const [error, setError] = useState(false)
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);

    function patchBtn(){
        axios.put(`http://localhost:3001/posts/${selectedPost.id}`, {
            name: nameRef.current.value,
            description: descriptionRef.current.value
        })
        .then(res => {reload() 
        setSelectedPost(null)
        })
    }


    function submitTodo(){

        if(nameRef.current.value === '' || nameRef.current.value.length > 20){     
            return (setError(true), alert('enter a valid value no more than 20 characters'))
        } 
        axios.post('http://localhost:3001/posts', {
                name: nameRef.current.value,
                description: descriptionRef.current.value})
            .then(res => {setPosts((prev) => [...prev, res.data])
            setError(false)
            })
    }


    return (<div id="form-container" className="form-container">
        <Form className="form">
            <Form.Group>
                <Row>
                    <Form.Label column sm="4">
                    Name:
                    </Form.Label>
                    <Col sm='7'>
                        <Form.Control className={error?'warning':''} id="name" ref={nameRef} key={selectedPost?.id + 'a'} defaultValue={selectedPost?selectedPost.name:''} size="sm" type="text" placeholder="Enter name" />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group >
                <Row>
                    <Form.Label column sm="4">
                    Description:
                    </Form.Label>
                    <Col sm='7'>
                        <Form.Control id="description" ref={descriptionRef} key={selectedPost?.id + 'b'} defaultValue={selectedPost?selectedPost.description:''} size="sm" type="text" placeholder="Enter description" />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
        <Button variant="primary" onClick={selectedPost?patchBtn:submitTodo}>Submit</Button>
        
    </div>
    )
}

export default Forms

