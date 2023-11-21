import React from 'react'
import {Routes, Route, BrowserRouter, Navlink} from 'react-router-dom';
import {Inicio} from '../componentes/Inicio';
import {Portafolio} from '../componentes/Portafolio';
import {Servicios} from '../componentes/Servicios';
import {Curriculum} from '../componentes/Curriculum';
import {Contacto} from '../componentes/Contacto';
import { HeaderNav } from '../componentes/layout/HeaderNav';
import { Footer } from '../componentes/layout/Footer';


export const MisRutas = () => {
  return (
    <div>
        <BrowserRouter>
            {/* Header y navegacion */}
            <HeaderNav />
            {/* Contenido central */}
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/Inicio' element={<Inicio/>}/>
                <Route path='/Portafolio' element={<Portafolio/>}/>
                <Route path='/Servicios' element={<Servicios/>}/>
                <Route path='/Curriculum' element={<Curriculum/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
            </Routes>
            {/* Footer */}
            <Footer />            
        </BrowserRouter>
    </div>
  )
}