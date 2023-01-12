
export default function Post({post}){
    return (<>
    <tbody>
        <tr>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.description}</td>
        </tr>
    </tbody>
    </>
    )
}