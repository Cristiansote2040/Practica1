import { useState } from "react";

export default function CvForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    archivo: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const MAX_SIZE = 2 * 1024 * 1024; // 2MB

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setError("");
    setSuccess(false);

    if (name === "archivo") {
      const file = files[0];

      if (!file) return;

      if (!["application/pdf", 
            "application/msword", 
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ].includes(file.type)) {
        setError("Solo se permiten archivos PDF o Word.");
        return;
      }

      if (file.size > MAX_SIZE) {
        setError("El archivo no puede superar los 2MB.");
        return;
      }

      setFormData({ ...formData, archivo: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.archivo) {
      setError("Debes adjuntar tu CV.");
      return;
    }

    setLoading(true);

    // Simulación de envío al servidor
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setSuccess(true);

    setFormData({
      nombre: "",
      email: "",
      archivo: null,
    });

    e.target.reset();
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px" }}>Postulate enviando tu CV</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email profesional"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="file"
          name="archivo"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          style={inputStyle}
        />

        {formData.archivo && (
          <small>
            Archivo seleccionado: <strong>{formData.archivo.name}</strong>
          </small>
        )}

        {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
        {success && (
          <p style={{ color: "green", margin: 0 }}>
            CV enviado correctamente ✅
          </p>
        )}

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? "Enviando..." : "Enviar CV"}
        </button>
      </form>
    </div>
  );
}

/* 🎨 Styles */

const containerStyle = {
  maxWidth: "450px",
  margin: "60px auto",
  padding: "30px",
  borderRadius: "16px",
  background: "#ffffff",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(90deg, #4e73df, #1cc88a)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};