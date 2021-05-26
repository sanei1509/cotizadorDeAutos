import React from "react";
import PropTypes from 'prop-types';

const Cita = ({cita, deleteWork}) => ( 
    <div className="cita">
        <p>Modelo: <span>{cita.modelo}</span> </p>
        <p>Cliente: <span>{cita.cliente}</span> </p>
        <p>Recibido: <span>{cita.fecha}</span> </p>
        <p>Entrega estimada: <span>{cita.entrega}</span> </p>
        <p>Problemas: <span>{cita.problemas}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => deleteWork(cita.id)  }
        >Eliminar &times;</button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteWork: PropTypes.func.isRequired
}
 
export default Cita;
