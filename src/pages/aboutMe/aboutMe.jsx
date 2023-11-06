import React from 'react'
import './style.css'
import aboutIMG from '../../images/data/brand-busta.jpg'
import gdc from './marquee-images/GDC.jpg'
import elie from './marquee-images/elie.jpg'
import penta from './marquee-images/penta.jpg'
import toot from './marquee-images/toot.png'
import guinnea from './marquee-images/guinnea.png'
import vivamos from './marquee-images/vivamos.png'
import viandas from './marquee-images/viandas.jpg'
import shell from './marquee-images/shell.png'
import atsa from './marquee-images/atsa.png'
import { motion } from 'framer-motion'


const AboutMe = () => {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2
            }}
            className='about' id='aboutMe'>
            <div className='about__container'>
                <img src={aboutIMG} alt="about image" className='about__containerIMG' />
                <div className='aboutMe__text'>
                    <h1>Conócenos</h1>
                    <h2>Un poco de nosotros</h2>
                    <p>Somos un equipo que trabaja para ofrecer un servicio de calidad. Nuestro trabajo se fundamenta en nuestros valores, los cuales son innegociables.</p>
                    <p>Cuando se trata de llegar a acuerdos, priorizamos el respeto y la comunicación. Nuestra meta es que beneficie a ambas partes y nos permita seguir creciendo. De esta manera, avanzamos día a día, manteniendo la sostenibilidad a lo largo del tiempo y fomentando una economía circular.</p>
                    <p>Acompañamos a nuestros empleados, clientes y proveedores, formando un equipo sólido con ellos, y estamos siempre en busca de la innovación, manteniéndonos informados sobre las últimas tendencias a nivel nacional e internacional.</p>
                    <h2>Para todos/as</h2>
                    <p>Ideal para rubro textil, zapaterías, comercios, supermercados, vinotecas, eventos sociales, empresariales, ruedas de negocios, ferias, congresos, regalos, y cualquier otro motivo en general.</p>
                    <p>Queremos generar productos de alta calidad y al mejor precio que permitan que su marca recorra la calle y fomente la conciencia ambiental.</p>

                    <ul>
                        <li>Bolsas de friselina planas y con fuelle lateral.</li>
                        <li>Bolsas de lienzo.</li>
                        <li>Bolsas biodegradables.</li>
                        <li>Mantas elásticas (ferretería y pinturerías).</li>
                        <li>Fundas (automóviles, maquinaria, etc.).</li>
                        <li>Cubre vestidos, cubre trajes.</li>
                        <li>Línea de bazar. Mates y planchetas.</li>
                    </ul>
                </div>
            </div>
            <div className='about__costumers'>
                <h2>CLIENTES</h2>
                <marquee behavior="" direction="" className='about__marquee' scrollamount='10' scrolldelay='0' >
                    <img src={gdc} alt="logo 1" className='marquee__logo' />
                    <img src={elie} alt="logo 2" className='marquee__logo' />
                    <img src={penta} alt="logo 3" className='marquee__logo' />
                    <img src={toot} alt="logo 4" className='marquee__logo' />
                    <img src={guinnea} alt="logo 5" className='marquee__logo' />
                    <img src={vivamos} alt="logo 5" className='marquee__logo' />
                    <img src={viandas} alt="logo 5" className='marquee__logo' />
                    <img src={shell} alt="logo 5" className='marquee__logo' />
                    <img src={atsa} alt="logo 5" className='marquee__logo' />
                </marquee>
            </div>
        </motion.section>
    )
}

export default AboutMe