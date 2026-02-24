import { useContext } from "react";
import { Carrito } from "../../Context/Create/Carrito";
import { useState } from "react";
import {Checkout} from '../Chekout/chekout'
export const CarritoPage = () => {
  const { state, dispatch } = useContext(Carrito);
  const [mostrarCheckout, setMostrarCheckout] = useState(false);
  const totalGeneral = state.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0,
  );

  if (state.length === 0) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Tu carrito está vacío 🥲</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ marginBottom: "30px" }}>Tu Carrito</h1>

      {state.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
            background: "#fff",
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QUANTITY",
                      payload: {
                        id: item.id,
                        cantidad: item.cantidad - 1,
                      },
                    })
                  }
                  disabled={item.cantidad <= 1}
                >
                  -
                </button>

                <span>{item.cantidad}</span>

                <button
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QUANTITY",
                      payload: {
                        id: item.id,
                        cantidad: item.cantidad + 1,
                      },
                    })
                  }
                >
                  +
                </button>

                <button
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_ITEM",
                      payload: { id: item.id },
                    })
                  }
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>

          <h3>${item.price * item.cantidad}</h3>
        </div>
      ))}

      {/* Total */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "right",
          borderTop: "2px solid #ddd",
          paddingTop: "20px",
        }}
      >
        <h2>Total: ${totalGeneral}</h2>

        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Vaciar carrito
        </button>
      </div>
      <button
        onClick={() => setMostrarCheckout(true)}
        style={{
          marginTop: "10px",
          padding: "12px 25px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Comprar
      </button>
      {mostrarCheckout && <Checkout total={totalGeneral} />}
    </div>
  );
};
