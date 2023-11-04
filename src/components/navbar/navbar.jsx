import React, { useEffect } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import brand from '../../images/brand.jpg'

const Navbar = () => {

    const handlerScroll = (e) => {
        const section = document.getElementById(e.getAttribute('href').split('#')[1])
        section.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='navbar'>
            <img src={brand} alt="logo" className='navbar__logo' />
            <ul>
                <li href='#home' onClick={(e) => handlerScroll(e.target)}>Inicio</li>
                <li href='#aboutMe' onClick={(e) => handlerScroll(e.target)}>Nosotros</li>
                <li href='#products' onClick={(e) => handlerScroll(e.target)}>Productos</li>
                <li href='#contact' onClick={(e) => handlerScroll(e.target)}>Contacto</li>
            </ul>
        </div>
    )
}

export default Navbar