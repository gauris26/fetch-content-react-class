import './UsuarioCard.css'

export default function UsuarioCard({ usuario }) {
  return (
    <div className="card">
      <header>
        <h2>{usuario.name}</h2>
        <p className="username">@{usuario.username}</p>
      </header>
      <main>
        <p>
          <strong>Email:</strong> {usuario.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {usuario.phone}
        </p>
        <p>
          <strong>Página Web:</strong> {usuario.website}
        </p>
        <section>
          <h4>Dirección</h4>
          <p>
            {usuario.address.street}, {usuario.address.suite}
          </p>
          <p>
            {usuario.address.city}, {usuario.address.zipcode}
          </p>
          <p>
            Lat: {usuario.address.geo.lat} | Lng: {usuario.address.geo.lng}
          </p>
        </section>

        <section>
          <h4>Compañia</h4>
          <hr/>
          <p>
            <strong>{usuario.company.name}</strong>
          </p>
          <p>{usuario.company.bs}</p>
        </section>
      </main>
    </div>
  );
}
