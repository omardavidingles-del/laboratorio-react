import React from 'react';
import Testimonios from './components/Testimonios';
import Contador from './components/Contador';
import Calculadora from './components/Calculadora';
import AppTareas from './components/Apptareas';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
        Laboratorio de React
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '30px' }}>
        {/* Proyecto 1 */}
        <section>
          <Testimonios />
        </section>

        {/* Proyecto 2 */}
        <section>
          <Contador />
        </section>

        {/* Proyecto 3 */}
        <section>
          <Calculadora />
        </section>

        {/* Proyecto 4 */}
        <section>
          <AppTareas />
        </section>
      </div>
      {/* Pie de página del autor */}
      <footer style={{ marginTop: '40px', textAlign: 'center', padding: '20px', borderTop: '1px solid #eaeaea', color: '#666' }}>
        <p>👨‍💻 Desarrollado por <strong>Omar David Vaca Maquiavelo</strong></p>
        <p style={{ fontSize: '0.9em' }}>Portafolio de React - Estudiante de Ingeniería Informatica | 2026</p>
      </footer>
    </div>
  );
}

export default App;