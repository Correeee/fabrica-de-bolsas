import React from 'react'
import './style.css'
import brand from '../../images/data/brand-busta.jpg'
import instagram from '../../images/socials/instagram.png'
import whatsapp from '../../images/socials/whatsapp.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={brand} alt="brand" className='footer__logo' />
            <div className='footer__socials'>
                <h2>Nuestras redes</h2>
                <a href="https://www.instagram.com/busta.ps/" target='__blank'>
                    <img src={instagram} alt="instagram" className='footer__icons' />
                </a>
                <span>|</span>
                <a href="https://wa.link/seyht3" target='__blank'>
                    <img src={whatsapp} alt="whatsapp" className='footer__icons' />
                </a>
            </div>
            <div className='footer__contact'>
                <h2>Contacto</h2>
                <h3>Dirección: <span>Gral. San Martin, Buenos Aires. Argentina.</span></h3>
                <h3>Información: <a href='mailto:solubusta@gmail.com' target='__blank'>info@busta.com.ar</a></h3>
                <h3>Ventas: <a href='mailto:solubusta@gmail.com' target='__blank'>ventas@busta.com.ar</a></h3>
                <h3>Whatsapp: <a href='https://wa.link/seyht3' target='__blank'>+54 9 1156045411</a></h3>
            </div>
        </footer>
    )
}

export default Footer