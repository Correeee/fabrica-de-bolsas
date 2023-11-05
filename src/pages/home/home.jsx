import React from 'react'
import './style.css'
import logo from '../../images/data/logo-busta.jpg'


const Home = () => {


    return (
        <section className='home' id='home'>
            <div className='home__container'>
                <div className='home__part1'>
                    <div className='home__text'>
                        Resalte su marca con elegancia. Nuestras bolsas para regalos empresariales transmiten calidad y distinción.
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
                        Potencie sus relaciones comerciales con nuestras bolsas personalizadas. Refuerce su imagen corporativa y deje una impresión duradera.
                    </div>
                </div>
                <div className='home__part3'>
                    <div className='home__text'>
                        Las bolsas, mates y más para regalos empresariales perfectos. Personalización exclusiva y calidad superior para hacer brillar su marca en cada detalle.
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