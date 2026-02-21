import { useEffect, useState } from "react";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      {posts.map((post) => (
        <div key={post.id} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;