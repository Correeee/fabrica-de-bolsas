import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import brand from '../../images/data/brand-busta.png'
import openedIMG from '../../images/navbar/opened.png'
import closedIMG from '../../images/navbar/closed.png'

const Navbar = () => {

    const navbar = useRef()

    const [opened, setOpened] = useState(false)

    const handlerScroll = (e) => {
        const section = document.getElementById(e.getAttribute('href').split('#')[1])
        section.scrollIntoView({ behavior: 'smooth' })
    }

    const handlerNavbar = () => {
        if (!opened && window.innerWidth < 768) {
            setOpened(true)
            navbar.current.style.display = 'flex'
        } else if (opened && window.innerWidth < 768) {
            setOpened(false)
            navbar.current.style.display = 'none'
        }
    }

    return (
        <div className='navbar' >
            <img src={brand} alt="logo" className='navbar__logo' />
            <ul className='navbar__list-screen' ref={navbar} >
                <li href='#home' onClick={(e) => {
                    handlerScroll(e.target);
                    handlerNavbar()
                }}>Inicio</li>
                <li href='#aboutMe' onClick={(e) => {
                    handlerScroll(e.target);
                    handlerNavbar()
                }}>Nosotros</li>
                <li href='#products' onClick={(e) => {
                    handlerScroll(e.target);
                    handlerNavbar()
                }}>Productos</li>
                <li href='#contact' onClick={(e) => {
                    handlerScroll(e.target);
                    handlerNavbar()
                }}>Contacto</li>
            </ul>
            <button className='navbar__btn' onClick={handlerNavbar}>
                <img src={!opened ? closedIMG : openedIMG} alt="closed" className='navbar__closedImg' />
            </button>
        </div>
    )
}

export default Navbar