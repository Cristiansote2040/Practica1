import { Routes, Route, Link } from "react-router-dom";
import { Carrito } from "./Re-Pages/Carrito";
import { Nav } from "../Components/Comp-Pages/Nav";
import { Incio } from "./Re-Pages/Incio";
import { Productos } from "./Re-Pages/Productos";
import ProductsProvider from "../Components/Context/Provid/DatosProv";
import { Footer } from "../Components/Comp-Pages/Footer";
import Producto from "./Re-Pages/Producto";
import CarritoProvider from "../Components/Context/Provid/Carrito";
import ScrollToHash from "../Components/Comp-Pages/ScrollHash";
import { Trabajo } from "./Re-Pages/Trabajo";
import { QuieneSomos } from "./Re-Pages/QuieneSomos";
import { Ayuda } from "./Re-Pages/Ayuda";

export const Inicio = () => {
  return (
    <>
      <ProductsProvider>
        <ScrollToHash />
        <CarritoProvider>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Incio></Incio>}></Route>
            <Route path="/Informacion" element={<QuieneSomos></QuieneSomos>}></Route>
            <Route path="/Ayuda" element={<Ayuda></Ayuda>}></Route>
            <Route path="/Carrito" element={<Carrito></Carrito>}></Route>
            <Route path="/Productos" element={<Productos></Productos>}></Route>
            <Route path="/Trabajo" element={<Trabajo></Trabajo>}></Route>
            <Route
              path="/Productos/:id"
              element={<Producto></Producto>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </CarritoProvider>
      </ProductsProvider>
    </>
  );
};
