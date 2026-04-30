import React, { useState } from 'react';

export default function Calculadora() {
  const [input, setInput] = useState("");

  const agregarValor = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    try {
      // Nota: eval() se usa aquí por simplicidad didáctica. 
      // En producción con entradas de usuario reales, se usa un parser matemático.
      const resultado = eval(input); 
      setInput(String(resultado));
    } catch (error) {
      setInput("Error");
    }
  };

  const limpiar = () => setInput("");

  const botones = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Calculadora</h2>
      <div style={{ border: '1px solid black', padding: '10px', fontSize: '24px', marginBottom: '10px', minHeight: '30px' }}>
        {input || "0"}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        {botones.map((btn) => (
          <button 
            key={btn} 
            onClick={() => btn === '=' ? calcularResultado() : agregarValor(btn)}
            style={{ padding: '15px', fontSize: '18px' }}
          >
            {btn}
          </button>
        ))}
      </div>
      <button onClick={limpiar} style={{ width: '100%', marginTop: '10px', padding: '10px' }}>Limpiar (C)</button>
    </div>
  );
}