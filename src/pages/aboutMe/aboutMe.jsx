import React from 'react'
import './style.css'
import aboutIMG from '../../images/data/brand-busta.png'
import gdc from './marquee-images/GDC.jpg'
import elie from './marquee-images/elie.jpg'
import penta from './marquee-images/penta.jpg'
import toot from './marquee-images/toot.png'
import guinnea from './marquee-images/guinnea.png'
import vivamos from './marquee-images/vivamos.png'
import viandas from './marquee-images/viandas.jpg'
import shell from './marquee-images/shell.png'
import atsa from './marquee-images/atsa.png'



const AboutMe = () => {

    return (
        <div className='about' id='aboutMe'>
            <div className='about__container'>
                <img src={aboutIMG} alt="about image" className='about__containerIMG' />
                <div className='aboutMe__text'>
                    <h1>Conocenos</h1>
                    <h2>Un poco de nosotros...</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo atque dolores libero labore! Officiis temporibus impedit accusamus dicta. Aperiam ab nihil itaque ipsa repellat dolor perferendis ipsum quia assumenda, minima totam, quos odio, dolore impedit veniam reiciendis numquam similique magnam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo atque dolores libero labore! Officiis temporibus impedit accusamus dicta. Aperiam ab nihil itaque ipsa repellat dolor perferendis ipsum quia assumenda, minima totam, quos odio, dolore impedit veniam reiciendis numquam similique magnam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo atque dolores libero labore! Officiis temporibus impedit accusamus dicta. Aperiam ab nihil itaque ipsa repellat dolor perferendis ipsum quia assumenda, minima totam, quos odio, dolore impedit veniam reiciendis numquam similique magnam.</p>
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
        </div>
    )
}

export default AboutMe