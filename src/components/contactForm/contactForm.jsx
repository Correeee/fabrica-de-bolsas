import React, { useState } from 'react'
import './style.css'
import { motion } from 'framer-motion'


const ContactForm = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')

    const [sending, setSending] = useState(false)

    const handlerMail = (e) => {
        e.preventDefault()

        if (name, phone, text, category, brand) {
            const msg = `¡Hola BUSTA! %0D%0A%0D%0A Mi nombre es ${name.toUpperCase()}, trabajo en el rubro ${category.toUpperCase()} y mi marca es ${brand.toUpperCase()}.%0D%0A%0D%0A${text} %0D%0A%0D%0A Mi número de contacto es ${phone}.`
            window.location.href = `mailto:solubusta@gmail.com?subject=Quiero%20contactarme%20con%20ustedes.&body=${msg}`
            setSending(true)
        }
    }


    return (
        <div className='contactForm'>
            {
                !sending ?
                    <>
                        <h1>PONETE EN CONTACTO CON NOSOTROS</h1>
                        {/* <h2>No dude en ponerse en contacto en cualquier momento.</h2> */}
                        <form className='contactForm__form' onSubmit={handlerMail}>
                            <input type="text" placeholder='Nombre completo' required onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder='Tu marca' required onChange={(e) => setBrand(e.target.value)} />
                            <input type="text" placeholder='Rubro' required onChange={(e) => setCategory(e.target.value)} />
                            <input type="tel" placeholder='Teléfono / Whatsapp' required onChange={(e) => setPhone(e.target.value)} />
                            <textarea cols="30" rows="10" placeholder='Tu consulta aquí...' required onChange={(e) => setText(e.target.value)} ></textarea>
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