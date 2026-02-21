import { useState, useEffect } from "react";
import './Comentarios.css'



export default function Comentarios() {
   
     const [comentario, setComentario] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setComentario(data));
  }, []);

  return (
    <div className="fondo">
      <h2 className="titulo">Comentarios</h2>

      <div className="contenedor">
        {comentario.map(comentario => (
        <div className="card" key={comentario.id}>
          <h2 className="email">{comentario.email}</h2>
          <p>{comentario.body}</p>
        </div>
         
        //   <li key={comentarios.id}>{comentarios.email}</li>
        ))}
      </div>
    </div>
    );
}