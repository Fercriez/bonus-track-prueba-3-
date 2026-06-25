// src/components/EventoCard.jsx
import PropTypes from 'prop-types';

export const EventoCard = ({ nombre = "Evento sin nombre", lugar = "Por definir", duracion = 0, tipo, descripcion = "", fechas = [], esGratuito = false }) => {
  // Estilos según el tipo
  const estilosPorTipo = {
    Concierto: { borderLeft: '5px solid #ff4757', backgroundColor: '#f1f2f6' },
    Teatro: { borderLeft: '5px solid #2ed573', backgroundColor: '#f1f2f6' },
    Exposición: { borderLeft: '5px solid #1e90ff', backgroundColor: '#f1f2f6' }
  };

  return (
    <div style={{ ...estilosPorTipo[tipo], padding: '15px', margin: '10px 0', borderRadius: '4px' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{nombre}</h3>
      <p><strong>Lugar:</strong> {lugar}</p>
      <p><strong>Tipo:</strong> {tipo}</p>
      <p><strong>Duración:</strong> {duracion > 0 ? `${duracion} minutos` : 'No especificada'}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Fechas:</strong> {fechas.join(', ')}</p>
      
      {/* Etapa 5: Destacar si es gratuito */}
      {esGratuito && (
        <span style={{ backgroundColor: '#2ed573', color: 'white', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
          ¡GRATIS!
        </span>
      )}
    </div>
  );
};

EventoCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  lugar: PropTypes.string,
  duracion: PropTypes.number,
  tipo: PropTypes.string.isRequired,
  descripcion: PropTypes.string,
  fechas: PropTypes.arrayOf(PropTypes.string),
  esGratuito: PropTypes.bool
};