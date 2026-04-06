import { useState } from "react";
import { Productos } from "../Create/Datos"; // aquí importás el contexto que creaste

export default function ProductsProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showPromoOnly, setShowPromoOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");

const productsData = [
  // 🏀 BALONES
  {
    id: 1,
    name: "Spalding NBA Official",
    price: 180,
    category: "Balones",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtqvHRRkHzBPdlAxdN5zSMl9a4SqkvYwZpg&s",
    promo: { type: "percentage", value: 15 }
  },
  {
    id: 2,
    name: "Wilson Evolution Game Ball",
    price: 150,
    category: "Balones",
    image: "https://www.wilsonstore.com.ar/cdn/shop/files/WTB0516BC_0_6_Evolution_BSKT_BR-1200x1200.jpg?v=1736880914&width=700",
    promo: null
  },

  // 👟 CALZADO
  {
    id: 3,
    name: "Nike LeBron 21",
    price: 320,
    category: "Calzado",
    image: "https://cdn-images.farfetch-contents.com/23/84/23/62/23842362_55242784_1000.jpg",
    promo: { type: "fixed", value: 40 }
  },
  {
    id: 4,
    name: "Adidas Harden Vol. 7",
    price: 280,
    category: "Calzado",
    image: "https://cdn-images.farfetch-contents.com/24/93/39/37/24933937_55683207_600.jpg",
    promo: null
  },
  {
    id: 5,
    name: "Air Jordan XXXVIII",
    price: 350,
    category: "Calzado",
    image: "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/7c5152e3-2a6f-4513-9e5e-4ed14776ec32/la-marca-jordan-lanza-las-air-jordan-xxxviii.jpg",
    promo: { type: "2x1" }
  },

  // 👕 INDUMENTARIA
  {
    id: 6,
    name: "Camiseta Lakers #23",
    price: 120,
    category: "Indumentaria",
    image: "https://acdn-us.mitiendanube.com/stores/001/150/754/products/c56c993f-2e88-4f02-8f58-cb374847df1d1-b3e216820f31e1556416618993916548-1024-1024.webp",
    promo: null
  },
  {
    id: 7,
    name: "Short Chicago Bulls",
    price: 90,
    category: "Indumentaria",
    image: "https://acdn-us.mitiendanube.com/stores/001/075/409/products/whatsapp-image-2025-11-06-at-1-36-05-pm-828bc282ec8c02389c17628207511206-1024-1024.webp",
    promo: { type: "percentage", value: 20 }
  },
  {
    id: 8,
    name: "Sudadera Golden State",
    price: 140,
    category: "Indumentaria",
    image: "https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-nike-name-and-number-hoodie-stephen-curry-mens_ss4_p-13304023+pv-1+u-144y23uhe8f0b1abzv0t+v-5df1d5d3ec534b8fa6ad636a9d17add1.jpg?_hv=2&w=1018",
    promo: null
  },

  // 🎒 ACCESORIOS
  {
    id: 9,
    name: "Muñequeras Pro",
    price: 25,
    category: "Accesorios",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_837628-MLA105982019493_012026-T.webp",
    promo: null
  },
  {
    id: 10,
    name: "Rodilleras Elite",
    price: 45,
    category: "Accesorios",
    image: "https://ferreira.vtexassets.com/arquivos/ids/428472-800-auto?v=638454335651200000&width=800&height=auto&aspect=true",
    promo: { type: "percentage", value: 10 }
  },
  {
    id: 11,
    name: "Mochila Basketball Nike",
    price: 110,
    category: "Accesorios",
    image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw17525901/products/NIDX9786-010/NIDX9786-010-2.JPG",
    promo: null
  },

  // 🏋️ EQUIPAMIENTO
  {
    id: 12,
    name: "Aro con red profesional",
    price: 220,
    category: "Equipamiento",
    image: "https://http2.mlstatic.com/D_NQ_NP_863384-MLA99509713768_112025-O.webp",
    promo: { type: "fixed", value: 30 }
  },
  {
    id: 13,
    name: "Tablero portátil",
    price: 480,
    category: "Equipamiento",
    image: "https://f.fcdn.app/imgs/580294/elreydelentretenimiento.com/erdeuy/ddf5/original/catalogo/6625495253131_6625495253131_1/2000-2000/tablero-acrilico-3-1m-basketball-portatil-pelota-tablero-acrilico-3-1m-basketball-portatil-pelota.jpg",
    promo: null
  },

  // 🧢 COLECCIONABLES
  {
    id: 14,
    name: "Funko Michael Jordan",
    price: 60,
    category: "Coleccionables",
    image: "https://http2.mlstatic.com/D_NQ_NP_877010-MLA43494501958_092020-O.webp",
    promo: { type: "percentage", value: 25 }
  },
  {
    id: 15,
    name: "Poster Kobe Bryant",
    price: 30,
    category: "Coleccionables",
    image: "https://i.pinimg.com/736x/de/2e/f1/de2ef1d23630d92a83d6638c2e980edb.jpg",
    promo: null
  },

  // 🏃 ENTRENAMIENTO
  {
    id: 16,
    name: "Conos de entrenamiento",
    price: 35,
    category: "Entrenamiento",
    image: "https://monterosport.com.ar/wp-content/uploads/2016/05/conos-medianitos.png",
    promo: { type: "percentage", value: 15 }
  },
  {
    id: 17,
    name: "Escalera de agilidad",
    price: 55,
    category: "Entrenamiento",
    image: "https://www.valentiamedical.com/958-large_default/escalera-velocidad.jpg",
    promo: { type: "percentage", value: 15 }
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