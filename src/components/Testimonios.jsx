import React from 'react';

// Datos simulados (usualmente vendrían de una base de datos o API)
const testimoniosData = [
  {
    id: 1,
    nombre: "Ada Lovelace",
    cargo: "Ingeniera de Software",
    texto: "Este producto cambió por completo la forma en que estructuro mis algoritmos."
  },
  {
    id: 2,
    nombre: "Alan Turing",
    cargo: "Científico de Datos",
    texto: "Una herramienta imprescindible para cualquier profesional del análisis lógico."
  }
];

// Componente individual
const Testimonio = ({ nombre, cargo, texto }) => (
  <div style={{ border: '1px solid #ccc', margin: '10px', padding: '15px', borderRadius: '8px' }}>
    <h3>{nombre}</h3>
    <p><strong>{cargo}</strong></p>
    <p>"{texto}"</p>
  </div>
);

// Componente principal
export default function ContenedorTestimonios() {
  return (
    <div>
      <h2>Lo que dicen nuestros usuarios</h2>
      {testimoniosData.map((t) => (
        <Testimonio key={t.id} nombre={t.nombre} cargo={t.cargo} texto={t.texto} />
      ))}
    </div>
  );
}