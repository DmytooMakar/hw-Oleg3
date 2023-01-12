import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import Post from "./Post";

import "./AllPosts.css"

export default function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
        .then(data => setPosts(data.data))
    }, [])
    
    console.log(posts)

    return (<div className="all-posts-container">
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Edit & Delete</th>
                </tr>
            </thead>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </Table>
    </div>
    )
}