export default function FormasDePago() {
  return (
    <section className="pago">
      <div className="pago__box">
        <h2>Formas de pagar</h2>
        <p className="pago__sub">
          Elegí la opción que más te convenga. Todas las compras son seguras y
          rápidas.
        </p>

        <div className="pago__grid">
          <div className="pago__card">
            <h3>💵 Efectivo</h3>
            <p>Pagás directamente en el local al momento de retirar.</p>
          </div>

          <div className="pago__card">
            <h3>📱 Mercado Pago</h3>
            <p>
              Pagá con QR o transferencia desde Mercado Pago de forma inmediata.
            </p>
          </div>

          <div className="pago__card">
            <h3>💳 Tarjeta de crédito</h3>
            <p>
              Aceptamos tarjetas de crédito. Consultá por cuotas disponibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
