import React, { Fragment, useState, useEffect } from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  //Agregar citas al local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas')); 
    if(!citasIniciales){
    citasIniciales = []; 
    } 

  // Arreglo de citas, arreglo de citas a añadir en la otra mitad de columna.
  const [ citas, setCitas ] = useState(citasIniciales);

 // UseEffect para realizar ciertas operaciones en los momentos que se cambia el state. 
  useEffect(() => {

    if(citasIniciales) { 
      localStorage.setItem('citas', JSON.stringify(citas));
     } else {
       localStorage.setItem('citas', JSON.stringify([]));
     }
  }, [citas, citasIniciales] );

  // Función que conserve las citas actuales y añada las nuevas.
  const createCita = cita => {
    setCitas([ ...citas,cita ]);
  }
      
  // Eliminando trabajo por su id único ( función );
  const deleteWork = id => {
      const restCitas = citas.filter(cita => cita.id !== id );
      setCitas(restCitas);
  } 

// Mensaje condicional
const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';


  return (
    <Fragment>
    <h1>Administrador de clientes</h1>
      <div className="container" >
        <div className="row" >
          <div className="one-half column" >
          <Formulario createCita={createCita} />
          </div>
          <div className="one-half column" >
              <h2>{titulo}</h2>
              {citas.map(cita => (
                                 
                <Cita 
                  key={cita.id}
                  cita={cita}
                  deleteWork={deleteWork}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
    );
}

export default App;
