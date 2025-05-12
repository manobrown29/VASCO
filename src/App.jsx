import { useState } from "react";

export function App() {
  const [numero, setNumero] = useState(100);
  const [mostrar, setMostrar] = useState(true);

  function aumentar() {
    setNumero(numero + 100)
  }

  function diminuir() {
    setNumero(numero - 100)
  }

  return(
    <div>
      <h1>Aumentador de Numeros</h1>
      <p>Número: {numero}</p>

      <div>
          <button onClick={aumentar}>Aumentar</button>
          <button onClick={diminuir}>Diminuir</button>
      </div>

      <div>
          {mostrar && <p>Vasco</p>}
          <button onClick={() => setMostrar(!mostrar)}>
            {mostrar ? "Serie B" : "Serie A"}
          </button>
      </div>
    </div>
  )
}