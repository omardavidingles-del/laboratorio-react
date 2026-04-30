import React from 'react';
import Testimonios from './components/Testimonios';
import Contador from './components/Contador';
import Calculadora from './components/Calculadora';
import AppTareas from './components/AppTareas';

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
    </div>
  );
}

export default App;