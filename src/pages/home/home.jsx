import React from 'react'
import './style.css'
import logo from '../../images/data/logo-busta.jpg'


const Home = () => {


    return (
        <section className='home' id='home'>
            <div className='home__container'>
                <div className='home__part1'>
                    <div className='home__text'>
                        Somos un equipo comprometido con valores innegociables, priorizando el respeto y la innovación. Nuestro objetivo es crecer sosteniblemente, informándonos sobre las tendencias globales.
                    </div>
                    <div className='home__bigText'>
                        PRODUCTOS
                    </div>
                </div>
                <div className='home__part2'>
                    <div className='home__bigText'>
                        EMPRESARIALES
                    </div>
                    <div className='home__bigText home__bigText-responsive'>
                        SUSTENTABLES
                    </div>
                    <div className='home__text'>
                        Ofrecemos productos de alta calidad para eventos empresariales y regalos, promoviendo la conciencia ambiental. Incluimos bolsas, mantas, fundas y artículos de bazar.
                    </div>
                </div>
                <div className='home__part3'>
                    <div className='home__text'>
                        Con años de experiencia, nuestro equipo trabaja con valores sólidos, priorizando la comunicación y la sostenibilidad. Acompañamos a empleados, clientes y proveedores en constante innovación.
                    </div>
                    <div className='home__bigText home__bigText-noResponsive'>
                        SUSTENTABLES
                    </div>
                </div>
            </div>
            {/* <img src={logo} alt="home image" className='home__img' /> */}
            <div className='filter'></div>
        </section>
    )
}

export default Home