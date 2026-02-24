import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Productos } from "../../Components/Context/Create/Datos";
import ProductoDetalle from "../../Components/Comp-Pages/Producto/Produc";

export default function ProductoDetallePage() {
  
  const { id } = useParams();
  console.log(id);
  const { productsData } = useContext(Productos);
  console.log(productsData);
  const product = productsData.find(p => p.id === parseInt(id));
  if (!product) return <p>Producto no encontrado 😕</p>;
  return <ProductoDetalle product={product} />;
}
