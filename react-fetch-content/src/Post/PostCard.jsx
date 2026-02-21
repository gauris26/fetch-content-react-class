import React from "react";

const PostCard = ({post}) =>{
    return(
        <div className="card">
            <h4><strong>Post ID: </strong>{post.id}</h4>
            <main>
            <section>
            <strong>Title: </strong> <p>{post.title}</p>
            </section>
            <hr />
            <section>
            <strong>Body: </strong> <p>{post.body}</p>
            </section>
            </main>
        </div>

    )
}

export default PostCard;