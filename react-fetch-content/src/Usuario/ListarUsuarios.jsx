import { useState, useEffect } from "react";
import UsuarioCard from "./UsuarioCard";

export default function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respose) => respose.json())
      .then((data) => setUsuarios(data));
  });

  return (
    <div>
      <h2>Usuarios</h2>
      {usuarios.map((usuario) => (
        <UsuarioCard key={usuario.id} usuario={usuario} />
      ))}
    </div>
  ); 
}