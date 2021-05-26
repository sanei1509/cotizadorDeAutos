import React, {Fragment, useState} from "react";
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = (props) => {
    const { createCita } = props;
    const [data, setData ] = useState({
        cliente: '',
         modelo: '',
          fecha: '',
        entrega: '',
      problemas: ''
      });
    
    const [error ,setError ] = useState(false);

    // función que se ejecuta cuando se escribe en algún espacio
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    // Extraer los valores
    const { cliente, modelo, fecha, entrega, problemas } = data;
    
    // AL ENVIAR
    const submitData = e => {
        e.preventDefault();
        
        // Validar 
        if(
         cliente.trim() === ''|| 
         modelo.trim() === '' ||
         fecha.trim() === ''||
         entrega.trim() === ''||
         problemas.trim() === ''
        ){
            setError(true);
            return;
        }
        // eliminar el mensaje anterior
            setError(false);
            
        // Asignar un ID
            data.id = uuid();
            console.log(data);

        // Crear la Cita
            createCita(data);
        
        // Reiniciar el form
            setData({
                cliente: '',
                 modelo: '',
                  fecha: '',
                entrega: '',
              problemas: ''
              });
    }
    return(
        <Fragment>
        <h2>Agendar nuevo cliente</h2>

             { error ? <p className="alerta-error">Completa todos los campos por favor</p> : null}

        <form 
            onSubmit={submitData}
        >
            <label>Nombre Cliente</label>
            <input 
                type="text"
                name="cliente"
                className="u-full-width"
                placeholder="Nombre del Cliente"
                onChange={handleChange}
                value={cliente}
            />

            <label>Modelo Equipo/Dispositivo</label>
            <input 
                type="text"
                name="modelo"
                className="u-full-width"
                placeholder="modelo del equipo del cliente"
                onChange={handleChange}
                value={modelo}
            />

            <label>Fecha</label>
            <input 
                type="date"
                max="2020"
                name="fecha"
                className="u-full-width"
                placeholder="fecha en la que se recibio"
                onChange={handleChange}
                value={fecha}
            />

            <label>Hora de entrega estimada</label>
            <input 
                type="time"
                name="entrega"
                className="u-full-width"
                placeholder="Fecha de entrega  "
                onChange={handleChange}
                value={entrega}
            />

            <label> Descripción del problema </label>
            <textarea 
                className="u-full-width"
                name="problemas"
                onChange={handleChange}
                value={problemas}
            ></textarea>
            
            <button
                type="submit"
                className="u-full-width button-outline"
            >Agregar a la lista</button>
        
        </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    createCita: PropTypes.func.isRequired
}

export default Formulario;