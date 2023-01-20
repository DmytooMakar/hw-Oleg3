import { useContext, useState } from "react";
import { 
    Col, 
    Form,
    Row,
    Button,
} from "react-bootstrap";
import axios from "axios"

import { Context } from "../../Context";

import "./Form.css"

function Forms(){
    const { reload, setPosts, value, setValue } = useContext(Context)
    const [error, setError] = useState(false);

    function patchBtn(){
        axios.put(`http://localhost:3001/posts/${value.id}`, {
            name: value.name,
            description: value.description
        })
        .then(res => {reload()
        setValue({
            id: '',
            name: '',
            description: ''
        })
        })
    }

    function onChangeName({target}){
        setValue((prev) => ({
            ...prev, 
            name: target.value
        }))
    }

    function onChangeDescription({target}){
        setValue((prev) => ({
            ...prev,
            description: target.value
        }))
    }

    function submitTodo(){
        if (value.name.trim() === '' || value.name.length > 20){
            alert('enter a valid value no more than 20 characters')
            return setError(true) 
        }
        axios.post('http://localhost:3001/posts', {
            name: value.name,
            description: value.description
        })
        .then(res => { 
            setError(false)
            setPosts((prev) => [...prev, res.data])
            setValue({
                id: '',
                name: '',
                description: ''
            })
        })   
    }

    return(<div className="form-container">
        <Form className="form">
            <Form.Group>
                <Row>
                    <Form.Label column sm="4">
                    Name:
                    </Form.Label>
                    <Col sm='7'>
                        <Form.Control value={value.name} 
                        onChange={onChangeName} className={error?'warning':''} 
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
                        <Form.Control value={value.description} 
                        onChange={onChangeDescription} 
                        size="sm" type="text" placeholder="Enter description" />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
        <Button variant="primary" onClick={value.id ? patchBtn : submitTodo}>Submit</Button>
    </div>)
}

export default Forms

