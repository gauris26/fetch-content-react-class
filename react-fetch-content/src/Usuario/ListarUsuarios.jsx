import { useState, useEffect } from "react";
import UsuarioCard from "./UsuarioCard";
import "./listarusuarios.css";

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respose) => respose.json())
      .then((data) => setUsuarios(data));
  });

  return (
    <>
      <h2 className="title">Usuarios</h2>
      <div className="users-container">
        {usuarios.map((usuario) => (
          <UsuarioCard key={usuario.id} usuario={usuario} />
        ))}
      </div>
    </>
  );
}
