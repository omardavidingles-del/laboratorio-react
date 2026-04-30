import React, { useState } from 'react';

export default function AppTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;
    
    const tareaObj = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    };
    
    setTareas([...tareas, tareaObj]);
    setNuevaTarea(""); // Limpiar el input
  };

  const alternarCompletada = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Gestor de Tareas</h2>
      
      <form onSubmit={agregarTarea} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Añadir nueva tarea..."
          style={{ padding: '8px', width: '70%' }}
        />
        <button type="submit" style={{ padding: '8px', width: '25%', marginLeft: '5%' }}>Agregar</button>
      </form>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li key={tarea.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', padding: '10px', background: '#f4f4f4', borderRadius: '5px' }}>
            <span 
              onClick={() => alternarCompletada(tarea.id)}
              style={{ cursor: 'pointer', textDecoration: tarea.completada ? 'line-through' : 'none', color: tarea.completada ? 'gray' : 'black' }}
            >
              {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(tarea.id)} style={{ color: 'red' }}>X</button>
          </li>
        ))}
      </ul>
      {tareas.length === 0 && <p>No hay tareas pendientes. ¡Todo al día!</p>}
    </div>
  );
}