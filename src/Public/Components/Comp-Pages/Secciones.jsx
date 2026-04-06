import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Productos } from "../Context/Create/Datos"; // <-- tu contexto global

export default function RopaSlider() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const { setSelectedCategory, productsData } = useContext(Productos);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  // 🔹 Generar categorías automáticamente desde los productos
  const listaimg = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtqvHRRkHzBPdlAxdN5zSMl9a4SqkvYwZpg&s",
    "https://acdn-us.mitiendanube.com/stores/001/402/757/products/diseno-sin-titulo-2023-11-16t154557-438-7e55ff83031afc712017001623472433-1024-1024.webp",
    "https://http2.mlstatic.com/D_791883-CBT106677518569_022026-C.jpg",
    "https://thumbs.dreamstime.com/b/equipamiento-y-accesorios-de-baloncesto-430645699.jpg",
    "https://img.freepik.com/vector-gratis/equipo-baloncesto_23-2147517411.jpg?semt=ais_user_personalization&w=740&q=80",
    "https://m.media-amazon.com/images/I/81LfVti7G5L.jpg",
    "https://img.freepik.com/foto-gratis/jugador-baloncesto-entrenamiento-tiro-medio_23-2148393856.jpg?semt=ais_user_personalization&w=740&q=80",
  ];
  const categorias = [...new Set(productsData.map((p) => p.category))].map(
    (cat, index) => ({
      id: index,
      name: cat,
      image: listaimg[index],
    }),
  );

  const goToCategory = (category) => {
    setSelectedCategory(category); // actualiza contexto global
    navigate(`/Productos/?category=${category}`); // actualiza URL
  };

  return (
    <section style={{ padding: "20px", position: "relative" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
        Explorar categorías
      </h2>

      <button onClick={() => scroll("left")} style={btnStyle("left")}>
        ◀
      </button>
      <button onClick={() => scroll("right")} style={btnStyle("right")}>
        ▶
      </button>

      <div
        ref={sliderRef}
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {categorias.map((cat) => (
          <div
            key={cat.id}
            onClick={() => goToCategory(cat.name)}
            style={{
              minWidth: "200px",
              flex: "0 0 auto",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#111",
              color: "white",
              cursor: "pointer",
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <p style={{ margin: 0 }}>{cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function btnStyle(side) {
  return {
    position: "absolute",
    top: "55%",
    [side]: "10px",
    transform: "translateY(-50%)",
    background: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    zIndex: 10,
  };
}
