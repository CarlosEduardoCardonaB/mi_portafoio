import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='page'>
      <h1>
        Hola, soy Carlos Eduardo Cardona, desarrollador web con experiencia en tecnologías como React y NodeJs.
        He trabjado con GCP y en proyectos móviles.
      </h1>
      <h2>
        He trabajado con otras tecnologías pero me apasioné desde que vi las bondades de javascript con Jquery.
        <Link to="/Contacto"> !Claro que quiero contactarte...¡</Link> 
      </h2>

      <section className='last-works'>
        <h2>Algunos de mis proyectos:</h2>
        <p>Estos son algunos de los proyectos en los que he participado.</p>
        <div className='works'>

        </div>
      </section>
    </div>
  )
}
