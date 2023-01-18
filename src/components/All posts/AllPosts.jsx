import { Table } from "react-bootstrap";
import { useContext } from "react";

import Post from "./Post";
import { Context } from "../../Context";

import "./AllPosts.css"

export default function AllPosts(){
    const { posts } = useContext(Context)

    return(<div className="all-posts-container">
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
    </div>)
}