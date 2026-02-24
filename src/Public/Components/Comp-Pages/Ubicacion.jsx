export default function DondeEstamos() {
  return (
    <section className="ubicacion2">
      <h2 className="ubicacion2__titulo">¿Dónde estamos?</h2>

      <div className="ubicacion2__mapaBox">
        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373631590486!3d-37.81627974202126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0f4d5%3A0x5045675218ce6e0!2sVictoria%2C%20Australia!5e0!3m2!1ses!2sar!4v1700000000000"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="ubicacion2__info">
        <p className="ubicacion2__direccion">
          📍 <b>Dirección:</b> Curazao 123, esquina Chavo — Ciudad, Provincia
        </p>

        <p className="ubicacion2__referencia">
          Estamos ubicados a metros de la esquina principal. Es fácil llegar en
          auto o transporte público.
        </p>

        <p className="ubicacion2__horario">
          🕒 <b>Horario:</b> Lunes a Sábado — 10:00 a 20:00
        </p>
      </div>
    </section>
  );
}
