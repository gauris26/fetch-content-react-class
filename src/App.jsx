import { useState } from "react";
import Login from "./login";
import Dashboard from "./dashboard";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);

  const iniciarSesion = () => {
    setUsuarioLogueado(true);
  };

  const cerrarSesion = () => {
    setUsuarioLogueado(false);
  };

  return (
    <div>
      {usuarioLogueado ? (
        <div>
          <button onClick={cerrarSesion}>Cerrar sesión</button>
          <Dashboard />
          
        </div>
      ) : (
        <Login iniciarSesion={iniciarSesion} />
      )}
    </div>
  );
}

export default App;