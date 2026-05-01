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
      {/* Pie de página del autor mejorado */}
      <footer style={{ 
        marginTop: '60px', 
        padding: '30px 20px', 
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
        textAlign: 'center', 
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ fontSize: '1.3em' }}>👨‍💻</span>
          <p style={{ margin: 0, fontSize: '1.1em', color: '#e2e8f0' }}>
            Desarrollado por <strong style={{ color: '#61dafb', letterSpacing: '0.5px' }}>Omar David Vaca Maquiavelo</strong>
          </p>
        </div>
        <p style={{ margin: 0, fontSize: '0.9em', color: '#94a3b8' }}>
          Portafolio de React • Estudiante de Ingeniería Informática | 2026
        </p>
      </footer>
    </div>
  );
}

export default App;