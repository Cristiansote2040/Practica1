import { useState } from "react";
import { Productos } from "../Create/Datos"; // aquí importás el contexto que creaste

export default function ProductsProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showPromoOnly, setShowPromoOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");

const productsData = [
  // 🏀 BALONES
  {
    id: 1,
    name: "Spalding NBA Official",
    price: 180,
    category: "Balones",
    image: "https://m.media-amazon.com/images/I/71G6E7nP4XL._AC_SL1500_.jpg",
    promo: true,
  },
  {
    id: 2,
    name: "Wilson Evolution Game Ball",
    price: 150,
    category: "Balones",
    image: "https://m.media-amazon.com/images/I/81W+HkX6pPL._AC_SL1500_.jpg",
    promo: false,
  },

  // 👟 CALZADO
  {
    id: 3,
    name: "Nike LeBron 21",
    price: 320,
    category: "Calzado",
    image: "https://static.nike.com/a/images/t_default/xxxxx/lebron-21.jpg",
    promo: true,
  },
  {
    id: 4,
    name: "Adidas Harden Vol. 7",
    price: 280,
    category: "Calzado",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/xxxxx/harden.jpg",
    promo: false,
  },
  {
    id: 5,
    name: "Air Jordan XXXVIII",
    price: 350,
    category: "Calzado",
    image: "https://static.nike.com/a/images/t_default/xxxxx/jordan38.jpg",
    promo: true,
  },

  // 👕 INDUMENTARIA
  {
    id: 6,
    name: "Camiseta Lakers #23",
    price: 120,
    category: "Indumentaria",
    image: "https://m.media-amazon.com/images/I/61lakers.jpg",
    promo: false,
  },
  {
    id: 7,
    name: "Short Chicago Bulls",
    price: 90,
    category: "Indumentaria",
    image: "https://m.media-amazon.com/images/I/61bulls.jpg",
    promo: true,
  },
  {
    id: 8,
    name: "Sudadera Golden State",
    price: 140,
    category: "Indumentaria",
    image: "https://m.media-amazon.com/images/I/61warriors.jpg",
    promo: false,
  },

  // 🎒 ACCESORIOS
  {
    id: 9,
    name: "Muñequeras Pro",
    price: 25,
    category: "Accesorios",
    image: "https://m.media-amazon.com/images/I/61wristband.jpg",
    promo: false,
  },
  {
    id: 10,
    name: "Rodilleras Elite",
    price: 45,
    category: "Accesorios",
    image: "https://m.media-amazon.com/images/I/61kneepad.jpg",
    promo: true,
  },
  {
    id: 11,
    name: "Mochila Basketball Nike",
    price: 110,
    category: "Accesorios",
    image: "https://m.media-amazon.com/images/I/61bag.jpg",
    promo: false,
  },

  // 🏋️ EQUIPAMIENTO
  {
    id: 12,
    name: "Aro con red profesional",
    price: 220,
    category: "Equipamiento",
    image: "https://m.media-amazon.com/images/I/61rim.jpg",
    promo: true,
  },
  {
    id: 13,
    name: "Tablero portátil",
    price: 480,
    category: "Equipamiento",
    image: "https://m.media-amazon.com/images/I/61board.jpg",
    promo: false,
  },

  // 🧢 COLECCIONABLES
  {
    id: 14,
    name: "Funko Michael Jordan",
    price: 60,
    category: "Coleccionables",
    image: "https://m.media-amazon.com/images/I/61funko.jpg",
    promo: true,
  },
  {
    id: 15,
    name: "Poster Kobe Bryant",
    price: 30,
    category: "Coleccionables",
    image: "https://m.media-amazon.com/images/I/61kobe.jpg",
    promo: false,
  },

  // 🏃 ENTRENAMIENTO
  {
    id: 16,
    name: "Conos de entrenamiento",
    price: 35,
    category: "Entrenamiento",
    image: "https://m.media-amazon.com/images/I/61cones.jpg",
    promo: false,
  },
  {
    id: 17,
    name: "Escalera de agilidad",
    price: 55,
    category: "Entrenamiento",
    image: "https://m.media-amazon.com/images/I/61ladder.jpg",
    promo: true,
  },
];
  return (
    <Productos.Provider
      value={{
        productsData,
        selectedCategory,
        setSelectedCategory,
        showPromoOnly,
        setShowPromoOnly,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </Productos.Provider>
  );
}