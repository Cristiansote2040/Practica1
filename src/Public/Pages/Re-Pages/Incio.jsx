import RopaSlider from "../../Components/Comp-Pages/Secciones";
import DondeEstamos from "../../Components/Comp-Pages/Ubicacion";
import FormasDePago from "../../Components/Comp-Pages/Medios-de-Pago";
import UnirteNosotros from "../../Components/Comp-Pages/Trabajo";
import {CouponInput} from "../../Components/Comp-Pages/Cupon/cupon";
export const Incio = () => {
  
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="Sombra" id="Sombra">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/136/629/191/basketball-hd-wallpaper-preview.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
              <div className="TextoImgSombra">
                <div className="texto-img">
                  <h1>Tienda Villa del Mar</h1>
                  <p>
                    Vila del Mar es una tienda especializada en ropa de
                    baloncesto. Ofrecemos jerseys, shorts, conjuntos y
                    accesorios con diseño moderno, excelente calidad y máxima
                    comodidad. Pensado para quienes viven el básquet dentro y
                    fuera de la cancha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section className="Acerca">
          <div className="Acerca-Bloque">
            <div className="Acer-img"></div>
            <div className="Acerca-Texto">
              <h1>
                <strong>Villa del Mar Sur</strong>
              </h1>
              <p>
                Vila del Mar es una tienda pensada para los que viven el
                baloncesto de verdad: los que entrenan, los que compiten, los
                que juegan por pasión y también los que llevan el estilo de la
                cancha a la calle.
              </p>
            </div>
          </div>
        </section>
        <section id="Categorias">
          <RopaSlider></RopaSlider>
        </section>
        <section id="Informacion">
        <DondeEstamos></DondeEstamos>
        </section>
        <section id="FormasPagar">
        <FormasDePago></FormasDePago>
        </section>
        <section className="Cupon">
          <CouponInput></CouponInput>
        </section>
        <section className="Etc" id="Trabajo">
          <UnirteNosotros></UnirteNosotros>
        </section>
        <div className="Espacio"></div>
      </main>
      <footer></footer>
    </>
  );
};
