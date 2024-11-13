import { useEffect, useState } from "react"


export default function Comments({post}) {
    // console.log(post.id, post.body);
    
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/comments")
        .then((res) => res.json())
        .then((data) => {
            setComments(data.filter((item) => item.postId !== post.id))
            // console.log(data);
        }
        )
    }, [])
    

    return (
        <>
            {comments.map((item) => {
                <p key={item.id}>{item.body}</p>
            })}
            {/* <h1>{JSON.stringify(comments)}</h1> */}
        </>
    )
    
}
