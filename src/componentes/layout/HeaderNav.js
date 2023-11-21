import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>C</span>
            <h3>Carlos Eduardo Cardona Buitrago</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/Inicio">Inicio</NavLink>                    
                </li>
                <li>
                    <NavLink to="/Portafolio">Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/Servicios">Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/Curriculum">Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/Contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
