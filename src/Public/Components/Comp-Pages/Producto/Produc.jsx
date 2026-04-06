import { useState, useContext } from "react";
import { Carrito } from "../../Context/Create/Carrito";

export default function ProductoDetalle({ product }) {
  const { dispatch } = useContext(Carrito);
  const [cantidad, setCantidad] = useState(1);
  return (
    <div
    className="Product"
      style={{
        display: "flex",
        border: "1px solid #ccc",
        borderRadius: "12px",
        margin: "20px 0",
        padding: "20px",
        gap: "20px",
        alignItems: "flex-start",
        background: "#fafafa",
      }}
    >
      {/* Imagen grande a la izquierda */}
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      {/* Contenido a la derecha */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* Título y precio */}
        <div>
          <h2 style={{ margin: 0 }}>{product.name}</h2>
          <p style={{ fontWeight: "bold", fontSize: "20px", margin: "5px 0" }}>
            ${product.price}
          </p>
        </div>

        {/* Selector de cantidad */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={() => setCantidad((prev) => Math.max(prev - 1, 1))}>
            -
          </button>
          <span>{cantidad | 0}</span>
          <button onClick={() => setCantidad((prev) => prev + 1)}>+</button>
        </div>

        {/* Botón agregar */}
        <button
          style={{
            padding: "10px 25px",
            background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            alignSelf: "flex-start",
          }}
          onClick={() =>
            dispatch({ type: "ADD_ITEM", payload: { ...product, cantidad: cantidad } })
          }
        >
          Agregar al carrito
        </button>

        {/* Detalles */}
        <div style={{ marginTop: "15px", fontSize: "14px", color: "#555" }}>
          <p>
            <strong>Categoría:</strong> {product.category}
          </p>
          <p>
            <strong>Modelo:</strong> {product.modelo || "N/A"}
          </p>
          <p>
            <strong>Marca/Nación:</strong> {product.nacion || "N/A"}
          </p>
          <p>
            <strong>Otros detalles:</strong> {product.detalles || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
