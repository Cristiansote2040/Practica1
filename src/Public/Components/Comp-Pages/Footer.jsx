import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerBox">
        {/* FORM */}
        <div className="footerForm">
          <h2>Contactanos</h2>
          <p>Escribinos y te respondemos lo antes posible.</p>

          <form onSubmit={() => alert("Simulacion:Fue enviada la sugerencia.")}>
            <input type="text" placeholder="Tu nombre" />
            <input type="email" placeholder="Tu email" />
            <textarea placeholder="Tu mensaje..." rows="4"></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* LINKS */}
        <div className="footerLinks">
          <h2>Novedades</h2>

          <div className="footerGrid">
            <Link to={"/Informacion"}>Quiénes somos</Link>
            <Link to={"/productos"}>Nuestros productos</Link>
            <Link to="/productos?promo=true">Promociones</Link>{" "}
            <Link to={"/Ayuda"}>Ayuda</Link>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>
          © {new Date().getFullYear()} Tienda Bowie — Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
