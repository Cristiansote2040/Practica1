import { Link } from "react-router-dom";

export default function UnirteNosotros() {
  
  return (
    <section className="heroTrabajo">
      <img
        className="heroTrabajo__img"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
        alt="Trabajá con nosotros"
      />

      <div className="heroTrabajo__overlay"></div>

      <div className="heroTrabajo__content">
        <h2>¿Querés unirte con nosotros?</h2>

        <p>
          Buscamos personas con ganas de trabajar y crecer. Si te interesa el
          mundo de la moda, el deporte y querés formar parte del equipo, te
          queremos conocer.
        </p>

        <Link className="heroTrabajo__btn" to={'/Trabajo'}>
          Enviar CV
        </Link>
      </div>
    </section>
  );
}
