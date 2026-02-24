import { useState, useContext } from "react";
import { Carrito } from "../../Context/Create/Carrito";
import { useNavigate } from "react-router-dom";

export const Checkout = ({ total }) => {
  const { state, dispatch } = useContext(Carrito);
  const [metodo, setMetodo] = useState(null);
  const [pagoCompleto, setPagoCompleto] = useState(false);
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  const generarCodigo = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const finalizarPago = () => {
    const nuevoCodigo = generarCodigo();
    setCodigo(nuevoCodigo);
    setPagoCompleto(true);
  };

  if (pagoCompleto) {
    return (
      <>
        
        <div
          style={{
            marginTop: "40px",
            padding: "40px",
            border: "2px solid green",
            borderRadius: "15px",
          }}
        >
          <h2>✅ Pago confirmado</h2>

          <p>
            Este es el código que deberás presentar para retirar tus productos:
          </p>

          <h1 style={{ letterSpacing: "4px" }}>{codigo}</h1>

          <p>
            <strong>Guardalo bien.</strong> Sin este código no podrás retirar tu
            compra.
          </p>

          <hr style={{ margin: "30px 0" }} />

          <h3>📦 Productos comprados:</h3>

          {state.map((item) => (
            <p key={item.id}>
              {item.name} x{item.cantidad}
            </p>
          ))}

          <hr style={{ margin: "30px 0" }} />

          <h3>📍 Lugar de retiro:</h3>
          <p>Av. Corrientes 1234, Buenos Aires</p>

          <iframe
            title="mapa"
            width="100%"
            height="250"
            style={{ borderRadius: "12px", marginTop: "15px" }}
            src="https://www.google.com/maps?q=Av.+Corrientes+1234,+Buenos+Aires&output=embed"
          ></iframe>

          <p style={{ marginTop: "20px" }}>
            🕒 Horario de retiro: Lunes a Viernes de 10:00 a 18:00 hs
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "12px 25px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch({ type: "CLEAR_CART" });
              navigate("/#Sombra");
            }}
          >
            Volver al inicio
          </button>
        </div>
      </>
    );
  }

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
      }}
    >
      <h2>Selecciona método de pago</h2>

      {!metodo && (
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <button onClick={() => setMetodo("mercado")}>Mercado Pago</button>
          <button onClick={() => setMetodo("tarjeta")}>
            Tarjeta de crédito
          </button>
        </div>
      )}

      {metodo === "mercado" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Total a pagar: ${total}</h3>
          <p>Alias para transferir:</p>
          <h2>cristian.rodriguez.mp</h2>

          <button
            onClick={finalizarPago}
            style={{ marginTop: "15px", padding: "10px 20px" }}
          >
            Ya pagué
          </button>
        </div>
      )}

      {metodo === "tarjeta" && (
        <div style={{ marginTop: "20px" }}>
          <input placeholder="Número de tarjeta" />
          <br />
          <input placeholder="Nombre del titular" />
          <br />
          <input placeholder="Vencimiento" />
          <br />
          <input placeholder="CVV" />
          <br />

          <button
            onClick={finalizarPago}
            style={{ marginTop: "15px", padding: "10px 20px" }}
          >
            Pagar ${total}
          </button>
        </div>
      )}
    </div>
  );
};
