import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(()=>{
        //El método filter me permite filtrar por una condición tal como se hace a continuación:
        let proyecto = trabajos.filter(trabajo => trabajo.id == params.id);
        //Aqui lo que hacemos es asignar a la variable proyecto todo el array que coincida con el valor del id que llega en la url que es params.id
        //console.log(proyecto);

        //Aqui seteamos en la variable proyeto el unico valor que va a tener el array proyecto por lo que solo va a tener una coincidencia con la validación de filter
        setProyecto(proyecto[0])

    }, []);

  return (
    <div className='page page-work'>
        <div className='mask'>
            <img src={'/images/' + proyecto.id + '.png'} />
        </div>
        
      <h1 className='heading'>{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <a href={proyecto.url} target='_blank'> Visita mi perfil de linkedin</a>
    </div>
  )
}
