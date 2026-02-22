import { useEffect, useState } from "react";

function Dashboard() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div>
      <h2 className="titulo">Albums-daniel</h2>

      <div className="container">
        {albums.map((album) => (
          <div key={album.id} className="card">
            <h3>{album.title}</h3>
            <p>User ID: {album.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;