import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <section className='works'>
      {
        trabajos.map(trabajo => ( //Este paréntisis indica que se maneja un return automático, pero también podemos declarar un return y funciona igual. POr lo general lleva corchetes pero estos no funcionan como return

          //console.log(trabajo.nombre);
          <article key={trabajo.id} className='work-item'>
            <div className='mask'>
              <img src={'/images/' + trabajo.id + '.png'}></img>
            </div>
            <span>{trabajo.categorias}</span>
            <h2>{trabajo.nombre}</h2>
            <h3>{trabajo.tecnologias}</h3>
            <h3><Link to={trabajo.url}> Visita mi perfil de linkedin</Link></h3>
          </article>
        ))
      }
      </section>

    </div>
  )
}
