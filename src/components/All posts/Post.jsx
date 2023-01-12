import { useRef } from "react";
import { Button } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";

export default function Post({post}){

    

    function updateBtn(){
        let update = axios.patch('http://localhost:3001/posts', {
            name : '',
            description: ''
        })
        console.log(update)
    }

    

    function deleteBtn(){
        
    }

    return (<>
    <tbody>
        <tr>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.description}</td>
            <td className="text-center td-btn">
                <Button className="btn" onClick={updateBtn}><BsFillPencilFill /></Button>
                <Button className="btn" onClick={deleteBtn}><AiTwotoneDelete /></Button>
            </td>
        </tr>
    </tbody>
    </>
    )
}