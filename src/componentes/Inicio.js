import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy Carlos Eduardo Cardona, desarrollador web con experiencia en tecnologías como <strong>React y NodeJs.</strong> 
        He trabjado con GCP y en proyectos móviles.
      </h1>
      <h2 className='title'>He trabajado con otras tecnologías pero me apasioné desde que vi las bondades de javascript con Jquery.</h2>
      <h2><Link to="/Contacto"> !Claro que quiero contactarte...¡</Link></h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos:</h2>
        <p>Estos son algunos de los proyectos en los que he participado.</p>
        <ListadoTrabajos limite='2'/>        
      </section>      
    </div>
  )
}
