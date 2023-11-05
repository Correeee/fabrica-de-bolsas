import React, { useState } from 'react'
import './style.css'
import { motion } from 'framer-motion'


const ContactForm = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')
    const [message, setMessage] = useState('gaga fas fas f')

    const [sending, setSending] = useState(false)

    const handlerMail = (e) => {
        e.preventDefault()
        if (name, phone, text) {
            const msg = `¡Hola BUSTA! Mi nombre es ${name.toUpperCase()} y mi número de contacto es ${phone}. ${text}`
            setMessage(msg)
            window.location.href = `mailto:solubusta@gmail.com?subject=Quiero%20contactarme%20con%20ustedes.&body=${message}`
            setSending(true)
        }

    }

    return (
        <div className='contactForm'>
            {
                !sending ?
                    <>
                        <h1>Póngase en contacto.</h1>
                        <h2>No dude en ponerse en contacto en cualquier momento.</h2>
                        <form className='contactForm__form' onSubmit={handlerMail}>
                            <input type="text" name="" id="" placeholder='Nombre completo' required onChange={(e) => setName(e.target.value)} />
                            <input type="tel" name="" id="" placeholder='Teléfono / Whatsapp' required onChange={(e) => setPhone(e.target.value)} />
                            <textarea name="" id="" cols="30" rows="10" placeholder='Tu consulta aquí...' required onChange={(e) => setText(e.target.value)} ></textarea>
                            <button
                                className="contactForm__btn"
                            >Enviar</button>
                        </form>
                    </>
                    :
                    <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2
                        }}
                        style={{ textAlign: 'center' }}>Abriendo su casilla para enviar el mensaje.</motion.h1>
            }
        </div>
    )
}

export default ContactForm