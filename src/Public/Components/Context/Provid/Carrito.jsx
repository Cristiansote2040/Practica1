import { createContext, useReducer, useEffect, useState } from "react";
import { Carrito } from "../Create/Carrito";

const carritoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existe = state.find(item => item.id === action.payload.id);
      if (existe) {
                
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: item.cantidad + action.payload.cantidad }
            : item
        );
      }
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload.id);

    case "UPDATE_QUANTITY":
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, cantidad: action.payload.cantidad }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export default function CarritoProvider({ children }) {

  const initialState = JSON.parse(localStorage.getItem("carrito")) || [];
  const initialCoupon = JSON.parse(localStorage.getItem("activeCoupon")) || null;
  const initialUsedCoupons = JSON.parse(localStorage.getItem("usedCoupons")) || [];

  const [state, dispatch] = useReducer(carritoReducer, initialState);
  const [activeCoupon, setActiveCoupon] = useState(initialCoupon);
  const [usedCoupons, setUsedCoupons] = useState(initialUsedCoupons);

  // Guardar carrito
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(state));
  }, [state]);

  // Guardar cupón activo
  useEffect(() => {
    localStorage.setItem("activeCoupon", JSON.stringify(activeCoupon));
  }, [activeCoupon]);

  // Guardar cupones usados
  useEffect(() => {
    localStorage.setItem("usedCoupons", JSON.stringify(usedCoupons));
  }, [usedCoupons]);

  // 🔥 TOTAL CON DESCUENTO REAL
  const getTotal = () => {
    let total = state.reduce(
      (acc, item) => acc + item.price * item.cantidad,
      0
    );
    

    if (!activeCoupon) return total;

    // Global
    if (activeCoupon.type === "global") {
      if (activeCoupon.discountType === "percentage") {
        total = total - (total * activeCoupon.value) / 100;
      }

      if (activeCoupon.discountType === "fixed") {
        total = total - activeCoupon.value;
      }
    }

    // Producto específico
    if (activeCoupon.type === "product") {
      state.forEach(item => {
        if (item.id === activeCoupon.productId) {
          if (activeCoupon.discountType === "percentage") {
            total -=
              (item.price * item.cantidad * activeCoupon.value) / 100;
          }
        }
      });
    }

    return Math.max(total, 0);
  };

  return (
    <Carrito.Provider
      value={{
        state,
        dispatch,
        activeCoupon,
        setActiveCoupon,
        usedCoupons,
        setUsedCoupons,
        getTotal
      }}
    >
      {children}
    </Carrito.Provider>
  );
}