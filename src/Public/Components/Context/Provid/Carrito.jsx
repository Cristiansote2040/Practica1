import { createContext, useReducer, useEffect } from "react";
import {Carrito} from '../Create/Carrito'

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

  // 👇 Trae lo guardado si existe
  const initialState = JSON.parse(localStorage.getItem("carrito")) || [];

  const [state, dispatch] = useReducer(carritoReducer, initialState);

  // 👇 Guarda automáticamente cada vez que cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(state));
  }, [state]);

  return (
    <Carrito.Provider value={{ state, dispatch }}>
      {children}
    </Carrito.Provider>
  );
}