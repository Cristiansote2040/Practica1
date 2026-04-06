import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carrito } from "../Context/Create/Carrito";

export const Nav = () => {
  const { state } = useContext(Carrito);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/Productos/?search=${search}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navSticky">
      <div className="Cabezera">
        <div className="Titulo">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/021/113/130/small/basketball-ball-3d-render-png.png"
            alt="Bowie"
          />
          <h1>Villa del Mar</h1>
        </div>

        <div className="navbar navbar-expand-lg navMenu">
          <div className="container-fluid navRow">
            {/* HAMBURGUESA */}
            <div className="Menu-Btn" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>

            {/* LINKS */}
            <ul
              className={`navbar-nav navLinks ${menuOpen ? "open" : ""}`}
              id="RamaIds"
            >
              <li>
                {" "}
                <form onSubmit={handleSearch} className="navSearch">
                  <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/#Sombra"
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Productos"
                  onClick={() => setMenuOpen(false)}
                >
                  Productos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/#Informacion"
                  onClick={() => setMenuOpen(false)}
                >
                  ¿Donde estamos?
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/#Trabajo"
                  onClick={() => setMenuOpen(false)}
                >
                  ¿Queres Trabajar?
                </Link>
              </li>
            </ul>

            {/* DERECHA */}
            <div className="navLeft">
              <span id="span-Cart">{state.length}</span>

              <Link to="/Carrito">
                <button className="navCart" title="Carrito">
                  🛒
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
