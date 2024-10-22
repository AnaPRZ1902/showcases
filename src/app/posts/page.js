import { useEffect, useState } from "react"

export default function PostPage ({params}){
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('htts://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=>{
            setPosts(data)
        })
    })


    return(
        <section>
            {posts.map(post=>(
                <article key = {post.id}>
                    <h2>{post.tittle}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )
}