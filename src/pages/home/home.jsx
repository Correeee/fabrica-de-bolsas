import React from 'react'
import './style.css'
import homeImg from '../../images/demo.png'

const Home = () => {
    return (
        <section className='home' id='home'>
            <div className='home__container'>
                <div className='home__part1'>
                    <div className='home__text'>
                        Nuestras bolsas argentinas de polietileno son incomparables en calidad y resistencia.
                    </div>
                    <div className='home__bigText'>
                        LAS MEJORES
                    </div>
                </div>
                <div className='home__part2'>
                    <div className='home__bigText'>
                        BOLSAS
                    </div>
                    <div className='home__text'>
                        Descubre la excelencia en bolsas de polietileno hechas en Argentina. 
                    </div>
                </div>
                <div className='home__part3'>
                    <div className='home__text'>
                    Ofrecemos durabilidad y versatilidad incomparables en cada producto. La opción número uno para sostenibilidad.
                    </div>
                    <div className='home__bigText'>
                        ARGENTINAS
                    </div>
                </div>
            </div>
            <img src={homeImg} alt="home image" className='home__img' />
        </section>
    )
}

export default Home