// src/App.jsx
import { useState } from 'react';
import { eventos } from './data/eventos';
import { ListaEventos } from './components/ListaEventos';
import { FiltroTipo } from './components/FiltroTipo';

function App() {
  const [filtro, setFiltro] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  // Buena práctica de seguridad: Normalizar y limpiar la entrada (limitar largo y quitar espacios extra)
  const busquedaNormalizada = busqueda.trim().toLowerCase().slice(0, 60);

  // Filtrar eventos por tipo y búsqueda
  const eventosFiltrados = eventos.filter((evento) => {
    const coincideTipo = filtro === 'Todos' || evento.tipo === filtro;
    const coincideBusqueda = evento.nombre.toLowerCase().includes(busquedaNormalizada);
    return coincideTipo && coincideBusqueda;
  });

  // Contador de gratuitos de los que están en pantalla
  const cantidadGratuitos = eventosFiltrados.filter(e => e.esGratuito).length;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Agenda Cultural</h1>
      
      <FiltroTipo 
        filtro={filtro} 
        setFiltro={setFiltro} 
        busqueda={busqueda} 
        setBusqueda={setBusqueda} 
      />

      <p style={{ fontWeight: 'bold' }}>
        Eventos encontrados: {eventosFiltrados.length} | Gratuitos: {cantidadGratuitos}
      </p>

      {/* Renderizado condicional */}
      {eventosFiltrados.length === 0 ? (
        <p style={{ color: 'red' }}>No hay eventos que coincidan con tu búsqueda.</p>
      ) : (
        <ListaEventos eventos={eventosFiltrados} />
      )}
    </div>
  );
}

export default App;