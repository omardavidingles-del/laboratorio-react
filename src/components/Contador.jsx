import React, { useState } from 'react';

export default function Contador() {
  const [conteo, setConteo] = useState(0);

  const incrementar = () => setConteo(conteo + 1);
  const decrementar = () => setConteo(conteo - 1);
  const reiniciar = () => setConteo(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Contador de Clics</h2>
      <h1 style={{ fontSize: '3rem' }}>{conteo}</h1>
      <div>
        <button onClick={decrementar} style={{ margin: '5px', padding: '10px' }}>- Reducir</button>
        <button onClick={reiniciar} style={{ margin: '5px', padding: '10px' }}>Reiniciar</button>
        <button onClick={incrementar} style={{ margin: '5px', padding: '10px' }}>+ Aumentar</button>
      </div>
    </div>
  );
}