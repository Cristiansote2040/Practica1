import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Inicio } from "./Public/Pages/Rutas";
import './Public/Pages/Styles/Main.css'
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Inicio></Inicio>
    </StrictMode>
  </BrowserRouter>,
);
