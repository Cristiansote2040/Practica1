import { useState } from "react";

export const FAQ = () => {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  const preguntas = [
    {
      pregunta: "¿Los productos son originales?",
      respuesta: "Trabajamos únicamente con proveedores oficiales."
    },
    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta: "Aceptamos tarjetas, transferencias y billeteras virtuales."
    },
    {
      pregunta: "¿Tienen garantía?",
      respuesta: "Todos los productos cuentan con garantía del fabricante."
    },
    {
      pregunta: "¿Puedo cancelar mi compra?",
      respuesta: "Sí, siempre que el pedido no haya sido despachado."
    },
    {
      pregunta: "¿Hacen descuentos por compras grandes?",
      respuesta: "Sí, ofrecemos descuentos en compras por volumen."
    },
    {
      pregunta: "¿Cómo puedo seguir mi envío?",
      respuesta: "Te enviamos un código de seguimiento por email."
    },
    {
      pregunta: "¿Atienden consultas por WhatsApp?",
      respuesta: "Sí, nuestro equipo responde en horario comercial."
    }
  ];

  return (
    <>
      <section style={styles.section}>
        <h2 style={styles.titulo}>Preguntas Frecuentes</h2>

        <div style={styles.container}>
          {preguntas.map((item, index) => (
            <div key={index} style={styles.item}>
              <div
                style={styles.pregunta}
                onClick={() => toggle(index)}
              >
                <span>{item.pregunta}</span>
                <span style={{
                  ...styles.icon,
                  transform: activo === index ? "rotate(45deg)" : "rotate(0deg)"
                }}>
                  +
                </span>
              </div>

              <div style={{
                ...styles.respuesta,
                maxHeight: activo === index ? "150px" : "0px",
                padding: activo === index ? "15px 25px" : "0px 25px"
              }}>
                {item.respuesta}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTÓN WHATSAPP FIJO */}
      <a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsapp}
      >
        💬
      </a>
    </>
  );
};

const styles = {
  section: {
    minHeight: "120vh",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #e0f2fe, #f8fafc)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  titulo: {
    fontSize: "40px",
    marginBottom: "50px",
    color: "#0f172a",
    fontWeight: "700",
    textAlign: "center"
  },

  container: {
    width: "100%",
    maxWidth: "750px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  item: {
    borderRadius: "50px",
    background: "white",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    overflow: "hidden"
  },

  pregunta: {
    padding: "20px 30px",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  icon: {
    fontSize: "22px",
    fontWeight: "bold",
    transition: "0.3s",
    color: "#2563eb"
  },

  respuesta: {
    overflow: "hidden",
    transition: "all 0.3s ease",
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#475569"
  },

  whatsapp: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    transition: "0.3s"
  }
};