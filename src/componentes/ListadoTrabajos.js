import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = ({limite}) => { //Si al valor de entrada le colocamos ({limite = 4}) el me va a tomar este valor por default en caso de que no le enviemos ninguno desde el llamado. Y si no colocamos nada ({limite}) entonces el toma el valor máximo del objeto a iterar por default
  return (
        <section className='works'>
        {
        
            trabajos.slice(0, limite).map(trabajo => (//Este paréntisis indica que se maneja un return automático, pero también podemos declarar un return y funciona igual. POr lo general lleva corchetes pero estos no funcionan como return.
            //El slice es para iterar sobre el arreglo desde y hasta la posición que definamos en los argumentos
                //console.log(trabajo.nombre);
                <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                    <img src={'/images/' + trabajo.id + '.png'}></img>
                </div>
                <span>{trabajo.categorias}</span>
                <h2>{trabajo.nombre}</h2>
                <h3>{trabajo.tecnologias}</h3>
                <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
                <h3><Link to={trabajo.url}> Visita mi perfil de linkedin</Link></h3>
                </article>
            ))
        }
        </section>
  )
}
