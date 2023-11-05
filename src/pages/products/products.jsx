import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

const Products = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2
            }}
            className='products' id='products'>

        </motion.section>
    )
}

export default Products