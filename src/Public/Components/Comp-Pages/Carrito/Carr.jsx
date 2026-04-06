import { useContext } from "react";
import { Carrito } from "../../Context/Create/Carrito";
import { useState } from "react";
import {Checkout} from '../Chekout/chekout'
export const CarritoPage = () => {
  const { state, dispatch } = useContext(Carrito);
  const [mostrarCheckout, setMostrarCheckout] = useState(false);
  
  const totalGeneral = state.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  if (state.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío 🥲</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Tu Carrito</h1>

      <div className="cart-list">
        {state.map((item) => (
          <div key={item.id} className="cart-card">
            {/* Sección Info: Imagen + Textos */}
            <div className="cart-item-main">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="unit-price">Unitario: ${item.price}</p>
                
                <div className="qty-selector">
                  <button 
                    onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, cantidad: item.cantidad - 1 }})}
                    disabled={item.cantidad <= 1}
                  >-</button>
                  <span>{item.cantidad}</span>
                  <button 
                    onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, cantidad: item.cantidad + 1 }})}
                  >+</button>
                </div>
              </div>
            </div>

            {/* Sección Subtotal y Borrar */}
            <div className="cart-item-right">
              <div className="subtotal-box">
                <span>Subtotal</span>
                <h3>${item.price * item.cantidad}</h3>
              </div>
              <button 
                className="btn-delete"
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { id: item.id }})}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="total-display">
          <span>Total a pagar:</span>
          <h2>${totalGeneral}</h2>
        </div>
        <div className="cart-buttons">
          <button className="btn-clear" onClick={() => dispatch({ type: "CLEAR_CART" })}>Vaciar Carrito</button>
          <button className="btn-buy" onClick={() => setMostrarCheckout(true)}>Finalizar Compra</button>
        </div>
      </div>

      {mostrarCheckout && <Checkout total={totalGeneral} />}
    </div>
  );
};