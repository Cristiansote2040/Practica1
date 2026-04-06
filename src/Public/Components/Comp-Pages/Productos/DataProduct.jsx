import { useRef } from "react";
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

  // 🔥 FUNCIÓN PARA CALCULAR DESCUENTO
  const getDiscountedPrice = (product) => {
    if (!product.promo) return product.price;

    const { type, value } = product.promo;

    switch (type) {
      case "percentage":
        return Math.round(product.price - (product.price * value) / 100);

      case "fixed":
        return product.price - value;

      case "2x1":
        return product.price; // El cálculo real se hace en carrito

      default:
        return product.price;
    }
  };

  // 🏷 Categorías dinámicas
  const categories = useMemo(() => {
    return ["ALL", ...new Set(productsData.map((p) => p.category))];
  }, [productsData]);

  useEffect(() => {
    if (promoFromUrl === "true") {
      setShowPromoOnly(true);
    }
  }, [promoFromUrl]);
 useEffect(() => {
  const params = new URLSearchParams(location.search);

  params.set("page", "1");

  navigate(`/Productos?${params.toString()}`, { replace: true });
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
        normalizeText(product.name).includes(normalizedSearch),
      );
      console.log('Searcheado',result);
      
    }

    // 🏀 Filtrar categoría
    if (selectedCategory !== "ALL") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 🔥 Solo promos
    if (showPromoOnly) {
      result = result.filter((p) => p.promo);
    }

    // 🔝 Promos primero
    result.sort((a, b) =>
      a.promo && !b.promo ? -1 : !a.promo && b.promo ? 1 : 0,
    );

    // 💲 Orden por precio (CON DESCUENTO)
    if (sortOrder === "asc")
      result.sort((a, b) => getDiscountedPrice(a) - getDiscountedPrice(b));

    if (sortOrder === "desc")
      result.sort((a, b) => getDiscountedPrice(b) - getDiscountedPrice(a));

    return result;
  }, [productsData, selectedCategory, showPromoOnly, sortOrder, search]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (pageFromUrl - 1) * productsPerPage;

  const endIndex = startIndex + productsPerPage;
  console.log(endIndex);

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const changePage = (newPage) => {
    navigate(`/Productos?page=${newPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getNoResultsMessage = () => {
    if (search) return "No encontramos productos con ese nombre 😢";
    if (showPromoOnly) return "No hay promociones activas 😢";
    if (selectedCategory !== "ALL")
      return "No encontramos productos en esta categoría 😔";
    return "Ups... no encontramos productos 😕";
  };

const handleCategory = (cat) => {
  setSelectedCategory(cat);

  const params = new URLSearchParams(location.search);
  params.delete("search"); // 🔥 borra el search
  params.set("page", "1");

  navigate(`/Productos?${params.toString()}`);
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
              style={{ overflowWrap: "break-word" }}
            >
              {cat === "ALL" ? "Todas" : cat}
            </button>
          ))}

          <h3>Promociones</h3>
          <button className="Btn" onClick={() => setShowPromoOnly(true)}>
            Solo en descuento
          </button>
          <button className="Btn" onClick={() => setShowPromoOnly(false)}>
            Mostrar todos
          </button>

          <h3>Ordenar por precio</h3>
          <button className="Btn" onClick={() => setSortOrder("asc")}>
            Menor a mayor
          </button>
          <button className="Btn" onClick={() => setSortOrder("desc")}>
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
                  <span className="promo-badge">
                    {product.promo.type === "percentage" &&
                      `-${product.promo.value}%`}
                    {product.promo.type === "fixed" &&
                      `-$${product.promo.value}`}
                    {product.promo.type === "2x1" && "2x1"}
                  </span>
                )}

                <img src={product.image} alt={product.name} />

                <div className="CardBo">
                  <div onClick={() => navigate(`/Productos/${product.id}`)}>
                    <h2>{product.name}</h2>
                    {product.promo ? (
                      <>
                        {product.promo.type === "2x1" ? (
                          <>
                            <p className="price">Precio: ${product.price}</p>
                            <p style={{ color: "green", fontWeight: "bold" }}>
                              Promoción 2x1 🔥 (Llevás 2 y pagás 1)
                            </p>
                          </>
                        ) : (
                          <>
                            <p>
                              Precio original:
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  color: "gray",
                                  marginLeft: "5px",
                                }}
                              >
                                ${product.price}
                              </span>
                            </p>

                            <p>
                              {product.promo.type === "percentage" && (
                                <>Descuento ({product.promo.value}%): </>
                              )}

                              {product.promo.type === "fixed" && (
                                <>Descuento (${product.promo.value}): </>
                              )}

                              <span
                                className="price"
                                style={{
                                  color: "red",
                                  fontWeight: "bold",
                                  marginLeft: "5px",
                                }}
                              >
                                ${getDiscountedPrice(product)}
                              </span>
                            </p>
                          </>
                        )}
                      </>
                    ) : (
                      <p className="price">${product.price}</p>
                    )}
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
            className="Btn"
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
