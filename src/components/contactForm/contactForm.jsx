import React, { useState } from 'react'
import './style.css'

const ContactForm = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')
    const [message, setMessage] = useState('gaga fas fas f')

    const handlerMail = () => {

        if (name, phone, text) {
            const msg = `¡Hola BUSTA! Mi nombre es ${name.toUpperCase()} y me número de contacto ${phone}. ${text}`
            setMessage(msg)
        }

    }

    return (
        <div className='contactForm'>
            <h1>Póngase en contacto.</h1>
            <h2>No dude en ponerse en contacto en cualquier momento.</h2>
            <form className='contactForm__form'>
                <input type="text" name="" id="" placeholder='Nombre completo' required onChange={(e) => setName(e.target.value)} />
                <input type="tel" name="" id="" placeholder='Teléfono / Whatsapp' required onChange={(e) => setPhone(e.target.value)} />
                <textarea name="" id="" cols="30" rows="10" placeholder='Tu consulta aquí...' required onChange={(e) => setText(e.target.value)} ></textarea>
                <a
                    href={`mailto:solubusta@gmail.com?subject=Quiero%20contactarme%20con%20ustedes.&body=${message}`} className="contactForm__btn"
                    onClick={handlerMail}>Enviar</a>
            </form>
        </div>
    )
}

export default ContactForm