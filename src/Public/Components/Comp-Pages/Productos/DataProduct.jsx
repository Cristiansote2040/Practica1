import { useContext, useMemo, useEffect } from "react";
import { Productos } from "../../Context/Create/Datos";
import { useNavigate, useLocation } from "react-router-dom";
import { Carrito } from "../../Context/Create/Carrito";

export default function ProductosPage() {
  const {
    productsData,
    selectedCategory,
    setSelectedCategory,
    showPromoOnly,
    setShowPromoOnly,
    sortOrder,
    setSortOrder,
  } = useContext(Productos);

  const { dispatch } = useContext(Carrito);
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";
  const promoFromUrl = query.get("promo");
  const pageFromUrl = parseInt(query.get("page")) || 1;

  const productsPerPage = 8;

  // 🏷 Categorías dinámicas
  const categories = useMemo(() => {
    return ["All", ...new Set(productsData.map((p) => p.category))];
  }, [productsData]);

  useEffect(() => {
    if (promoFromUrl === "true") {
      setShowPromoOnly(true);
    }
  }, [promoFromUrl]);

  // 🔄 Resetear a página 1 si cambian filtros
  useEffect(() => {
    navigate(`/Productos?page=1`);
  }, [selectedCategory, showPromoOnly, sortOrder, search]);

  const normalizeText = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // 🔍 Buscar por nombre
    if (search) {
      const normalizedSearch = normalizeText(search);
      result = result.filter((product) =>
        normalizeText(product.name).includes(normalizedSearch)
      );
    }

    // 🏀 Filtrar categoría
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 🔥 Solo promos
    if (showPromoOnly) {
      result = result.filter((p) => p.promo);
    }

    // 🔝 Promos primero
    result.sort((a, b) =>
      a.promo && !b.promo ? -1 : !a.promo && b.promo ? 1 : 0
    );

    // 💲 Orden por precio
    if (sortOrder === "asc") result.sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") result.sort((a, b) => b.price - a.price);

    return result;
  }, [productsData, selectedCategory, showPromoOnly, sortOrder, search]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (pageFromUrl - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const changePage = (newPage) => {
    navigate(`/Productos?page=${newPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getNoResultsMessage = () => {
    if (search) return "No encontramos productos con ese nombre 😢";
    if (showPromoOnly) return "No hay promociones activas 😢";
    if (selectedCategory !== "All")
      return "No encontramos productos en esta categoría 😔";
    return "Ups... no encontramos productos 😕";
  };

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <div className="products-page">
      <h1>Productos</h1>

      <div className="content">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <h3>Categorías</h3>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={selectedCategory === cat ? "active-category" : ""}
            >
              {cat === "All" ? "Todas" : cat}
            </button>
          ))}

          <h3>Promociones</h3>
          <button onClick={() => setShowPromoOnly(true)}>
            Solo en descuento
          </button>
          <button onClick={() => setShowPromoOnly(false)}>
            Mostrar todos
          </button>

          <h3>Ordenar por precio</h3>
          <button onClick={() => setSortOrder("asc")}>
            Menor a mayor
          </button>
          <button onClick={() => setSortOrder("desc")}>
            Mayor a menor
          </button>
        </aside>

        {/* GRID */}
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <h2>{getNoResultsMessage()}</h2>
            </div>
          ) : (
            currentProducts.map((product) => (
              <div key={product.id} className="card-card">
                {product.promo && (
                  <span className="promo-badge">Promo</span>
                )}

                <img src={product.image} alt={product.name} />

                <div className="CardBo">
                  <div onClick={() => navigate(`/Productos/${product.id}`)}>
                    <h2>{product.name}</h2>
                    <p className="price">${product.price}</p>
                  </div>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "ADD_ITEM",
                        payload: { ...product, cantidad: 1 },
                      })
                    }
                    className="add-btn"
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
                  >
                    Agregar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* PAGINACIÓN */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={pageFromUrl === 1}
            onClick={() => changePage(pageFromUrl - 1)}
          >
            « Anterior
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={pageFromUrl === index + 1 ? "active" : ""}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={pageFromUrl === totalPages}
            onClick={() => changePage(pageFromUrl + 1)}
            
          >
            Siguiente »
          </button>
        </div>
      )}
    </div>
  );
}