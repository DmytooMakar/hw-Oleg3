import { useContext } from "react";
import { Button } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";

import { Context } from "../../Context";

export default function Post({ post }){
    const { reload, setValue } = useContext(Context)

    function updateBtn(){
        setValue({
            id: post.id,
            name: post.name,
            description: post.description
        })
    }

    function deleteBtn(){
        axios.delete(`http://localhost:3001/posts/${post.id}`)
        .then(res => reload())
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