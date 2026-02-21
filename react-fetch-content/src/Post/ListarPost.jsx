import React from "react";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import './listarpost.css';

const ListarPost = () =>{
    const [data, setData] = useState([]);

    const fetchPost = async () =>{
        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setData(data.slice(0, 10));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchPost();
    }, []);

    return (
        <>
            <h2 className="title">Posts - Sebastian Cruz</h2>
            <div className="container">
            {data?.filter((data)=> (data.id <= 25)).map(post=> (
                <PostCard key={post.id} post={post} />
            ))}
            </div>
        </>
    )

}

export default ListarPost;