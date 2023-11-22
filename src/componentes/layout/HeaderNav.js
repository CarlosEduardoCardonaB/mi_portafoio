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
                    <NavLink to="/Inicio" className={({isActive})=>isActive ? "active" : ""}>Inicio</NavLink>                    
                </li>
                <li>
                    <NavLink to="/Portafolio" className={({isActive})=>isActive ? "active" : ""}>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/Servicios" className={({isActive})=>isActive ? "active" : ""}>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/Curriculum" className={({isActive})=>isActive ? "active" : ""}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/Contacto" className={({isActive})=>isActive ? "active" : ""}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
