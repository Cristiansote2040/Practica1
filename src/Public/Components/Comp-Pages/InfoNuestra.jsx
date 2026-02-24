export const InfoTienda = () => {
  return (
    <section style={styles.section}>
      
      {/* HERO SUPERIOR */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Informacion Nuestra</h1>
        
      </div>

      {/* BLOQUE 1 */}
      <div style={styles.cardBlue}>
        <h2 style={styles.h2}>¿Quiénes somos?</h2>
        <p style={styles.text}>
          Somos una tienda especializada en productos de basketball ubicada en Argentina.
          Nuestro proyecto comenzó como una iniciativa pequeña entre amigos que jugaban
          en ligas locales y necesitaban equipamiento confiable sin tener que esperar
          semanas por importaciones. Lo que empezó como ventas informales terminó
          convirtiéndose en una tienda online enfocada en calidad, disponibilidad y
          atención personalizada.
        </p>
      </div>

      {/* BLOQUE 2 */}
      <div style={styles.cardOrange}>
        <h2 style={styles.h2}>Dónde estamos</h2>
        <p style={styles.text}>
          Operamos principalmente desde Buenos Aires, realizando envíos a todo el país.
          Nuestro crecimiento fue progresivo, trabajando con proveedores nacionales e
          internacionales para ofrecer zapatillas, indumentaria y accesorios pensados
          para entrenamiento y competencia. Con el tiempo logramos consolidar una base
          de clientes fieles que buscan rendimiento sin pagar precios exagerados.
        </p>
      </div>

      {/* BLOQUE 3 */}
      <div style={styles.cardWhite}>
        <h2 style={styles.h2}>Un dato curioso</h2>
        <p style={styles.textDark}>
          Nuestro primer stock se almacenaba en una habitación adaptada como depósito.
          El primer mes vendimos solo 12 productos, pero cada venta fue gestionada de
          forma directa, hablando con cada cliente. Hoy el catálogo es mucho más amplio,
          pero mantenemos esa misma atención detallada que nos permitió crecer paso a paso.
        </p>
      </div>

    </section>
  );
};

const styles = {
  section: {
    minHeight: "150vh",
    padding: "60px 20px",
    background: "linear-gradient(180deg, #0f172a, #1e293b)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px"
  },

  hero: {
    textAlign: "center",
    color: "white",
    maxWidth: "800px"
  },

  title: {
    fontSize: "42px",
    marginBottom: "15px"
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.8
  },

  cardBlue: {
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    padding: "40px",
    borderRadius: "20px",
    color: "white",
    maxWidth: "900px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)"
  },

  cardOrange: {
    background: "linear-gradient(135deg, #f97316, #ea580c)",
    padding: "40px",
    borderRadius: "20px",
    color: "white",
    maxWidth: "900px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)"
  },

  cardWhite: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    color: "#111",
    maxWidth: "900px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)"
  },

  h2: {
    fontSize: "28px",
    marginBottom: "15px"
  },

  text: {
    fontSize: "17px",
    lineHeight: "1.6"
  },

  textDark: {
    fontSize: "17px",
    lineHeight: "1.6",
    color: "#222"
  }
};