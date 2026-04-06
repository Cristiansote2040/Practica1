import { useState, useContext } from "react";
import { coupons } from "./Cupones";
import { Carrito } from "../../Context/Create/Carrito";

export const CouponInput = () => {
  const { state, activeCoupon, setActiveCoupon, usedCoupons, setUsedCoupons } =
    useContext(Carrito);

  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | error

  const getCartTotal = () => {
    return state.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const applyCoupon = () => {
    const found = coupons.find(
      (c) => c.code.toLowerCase() === input.toLowerCase(),
    );
    console.log(activeCoupon);

    if (!found) {
      setMessage("Cupón inválido ❌");
      setMessageType("error");
      return;
    }

    if (usedCoupons.includes(found.code)) {
      setMessage("Este cupón ya fue utilizado ⚠️");
      setMessageType("error");
      return;
    }

    const today = new Date();
    if (new Date(found.expires) < today) {
      setMessage("Cupón expirado ⛔");
      setMessageType("error");
      return;
    }

    const total = getCartTotal();
    if (total < found.minPurchase) {
      setMessage(
        `Necesitás comprar mínimo $${found.minPurchase} para usar este cupón`,
      );
      setMessageType("error");
      return;
    }

    setActiveCoupon(found);

    if (found.oneTime) {
      setUsedCoupons([...usedCoupons, found.code]);
    }

    setMessage("Cupón aplicado correctamente 🎉");
    setMessageType("success");
  };
 
  return (
    <div className="coupon-container">
      <h2>🎟️ ¿Tenés un cupón?</h2>
      <p className="coupon-description">
        Ingresá tu código promocional y obtené descuentos exclusivos en tu
        compra.
      </p>

      <div className="coupon-input-group">
        <input
          type="text"
          placeholder="Ej: DESCUENTO10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => applyCoupon()}>Aplicar</button>
      </div>

      {message && (
        <div className={`coupon-message ${messageType}`}>{message}</div>
      )}

      {activeCoupon && (
        <div className="coupon-success-card">
          <h4>🎉 Cupón Activo</h4>
          <p>
            <strong>Código:</strong> {activeCoupon.code}
          </p>
          <p>Descuento aplicado correctamente a tu carrito.</p>
          <p>{activeCoupon.type === "product"
        ? `Este cupón aplica a el producto: ${activeCoupon.name} `
        : "Este cupón aplica a toda la compra."}
</p>
        </div>
      )}
    </div>
  );
};
