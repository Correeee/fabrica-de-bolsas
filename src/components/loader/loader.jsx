import React, { useRef } from 'react'
import './style.css'
import brand from '../../images/data/brand-busta.png'

const Loader = () => {


    return (
        <div className='loader'>
            <img src={brand} alt="brand" className='loader__brand' />
            <div className='loader__bar'>
                <div className='loader__subBar' id='subBar'></div>
            </div>
        </div>
    )
}

export default Loader