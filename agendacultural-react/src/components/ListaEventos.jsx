// src/components/ListaEventos.jsx
import { EventoCard } from './EventoCard';
import PropTypes from 'prop-types';

export const ListaEventos = ({ eventos }) => {
  return (
    <div>
      {eventos.map((evento) => (
        <EventoCard key={evento.id} {...evento} />
      ))}
    </div>
  );
};

ListaEventos.propTypes = {
  eventos: PropTypes.array.isRequired
};