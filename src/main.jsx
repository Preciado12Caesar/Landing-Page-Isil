import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function CalculadoraPromedio() {
  const [pa1, setPa1] = useState("");
  const [pa2, setPa2] = useState("");
  const [pa3, setPa3] = useState("");
  const [pa4, setPa4] = useState("");
  const [examenFinal, setExamenFinal] = useState("");
  const [promedio, setPromedio] = useState(null);

  const calcularPromedio = () => {
    const n1 = parseFloat(pa1) || 0;
    const n2 = parseFloat(pa2) || 0;
    const n3 = parseFloat(pa3) || 0;
    const n4 = parseFloat(pa4) || 0;
    const exFinal = parseFloat(examenFinal) || 0;

    const resultado =
      n1 * 0.15 + n2 * 0.15 + n3 * 0.15 + n4 * 0.15 + exFinal * 0.4;
    setPromedio(resultado.toFixed(1));
  };

  return (
    <div id="Calculadora" style={{ fontFamily: "Arial", padding: "20px" }}>

    <div><h2>Calculadora de Promedio</h2></div>

    <div id="Notas">
      <div id="notas">
        <h4>PA1:</h4>
        <h4>PA2:</h4>
        <h4>PA3:</h4>
        <h4>PA4:</h4>
        <h4>Examen Final:</h4>
        <h4 id="txtPromedio">Promedio:</h4>
      </div>

      <div
        id="inputNotas"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          maxWidth: "250px",
        }}
      >
        <input
          type="number"
          value={pa1}
          onChange={(e) => setPa1(e.target.value)}
          placeholder="Ingrese nota PA1"
        />
        <input
          type="number"
          value={pa2}
          onChange={(e) => setPa2(e.target.value)}
          placeholder="Ingrese nota PA2"
        />
        <input
          type="number"
          value={pa3}
          onChange={(e) => setPa3(e.target.value)}
          placeholder="Ingrese nota PA3"
        />
        <input
          type="number"
          value={pa4}
          onChange={(e) => setPa4(e.target.value)}
          placeholder="Ingrese nota PA4"
        />
        <input
          type="number"
          value={examenFinal}
          onChange={(e) => setExamenFinal(e.target.value)}
          placeholder="Ingrese nota Examen Final"
        />

        <button id="btnResultado" onClick={calcularPromedio}>Calcular Promedio</button>
        {promedio !== null && (
          <div id="resultado">Promedio: {promedio}</div>
        )}
      </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CalculadoraPromedio />
  </StrictMode>
);
