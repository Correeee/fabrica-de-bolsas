import React from 'react'
import './style.css'
import ContactForm from '../../components/contactForm/contactForm'
import { motion } from 'framer-motion'


const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2
            }}
            className='contact' id='contact'>
            <ContactForm />
        </motion.section>
    )
}

export default Contact