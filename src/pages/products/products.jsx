import React, { useState } from 'react'
import './style.css'
import { motion } from 'framer-motion'
import product from '../../images/data/brand-busta.jpg'
import lisas from '../../images/products/categories/lisas.png'
import estampadas from '../../images/products/categories/estampadas.png'
import mates from '../../images/products/categories/mates.png'
import genericas from '../../images/products/categories/genericas.png'
import ReactImageGallery from 'react-image-gallery'
import { estampadasList, genericasList, lisasList, matesList } from './data'


const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState()
    const [title, setTitle] = useState()

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2
            }}
            className='products' id='products'
        >
            {
                !selectedCategory ?
                    <>
                        <h1>Nuestros productos</h1>
                        <div className='carousel'>
                            <div className='carousel__card' onClick={() => {
                                setSelectedCategory(lisasList);
                                setTitle('Bolsas lisas')
                            }}>
                                <img src={lisas} alt="Bolsas lisas" className='carousel__img' />
                                <h2>Bolsas lisas</h2>
                            </div>
                            <div className='carousel__card' onClick={() => {
                                setSelectedCategory(estampadasList);
                                setTitle('Bolsas estampadas')
                            }}>
                                <img src={estampadas} alt="Bolsas estampadas" className='carousel__img' />
                                <h2>Bolsas estampadas</h2>
                            </div>
                            <div className='carousel__card' onClick={() => {
                                setSelectedCategory(genericasList);
                                setTitle('Genéricas')
                            }}>
                                <img src={genericas} alt="Genéricas" className='carousel__img' />
                                <h2>Genéricas</h2>
                            </div>
                        </div>
                    </>
                    :
                    <div className='products__selected'>
                        <div className='products__selectedContainer'>
                            <h1>{title}</h1>
                            <button onClick={() => setSelectedCategory()}>Volver</button>
                        </div>
                        <ReactImageGallery items={selectedCategory} showPlayButton={false} />
                    </div>
            }

        </motion.section>
    )
}

export default Products