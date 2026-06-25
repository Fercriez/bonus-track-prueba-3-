// src/components/FiltroTipo.jsx
import PropTypes from 'prop-types';

export const FiltroTipo = ({ filtro, setFiltro, busqueda, setBusqueda }) => {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
      <input 
        type="text" 
        placeholder="Buscar evento..." 
        value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '8px', width: '250px' }}
      />
      <select value={filtro} onChange={(e) => setFiltro(e.target.value)} style={{ padding: '8px' }}>
        <option value="Todos">Todos los tipos</option>
        <option value="Concierto">Concierto</option>
        <option value="Teatro">Teatro</option>
        <option value="Exposición">Exposición</option>
      </select>
    </div>
  );
};

FiltroTipo.propTypes = {
  filtro: PropTypes.string.isRequired,
  setFiltro: PropTypes.func.isRequired,
  busqueda: PropTypes.string.isRequired,
  setBusqueda: PropTypes.func.isRequired
};