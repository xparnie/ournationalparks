import React, { useState } from 'react'
import firebaseConfig from '../../Firebase'
import 'firebase/database'
import PropTypes from 'prop-types'

import '../../styles/contact/_contact.scss'

const ContactPage = () => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('')
    
    const [message, setMessage] = useState('')

    const handleSumbit = (e) => {
        e.preventDefault()

        if(nameError || emailError || phoneError) {
            console.log(nameError, emailError, phoneError, 'No soup')
            return
        }

        firebaseConfig.database().ref('our-national-parks').set({
            name: name,
            email: email,
            phone: phone,
            message: message
        })

        document.getElementById('contactForm').reset()
    }

    const validateName = (e) => {
        const check = e.target.value.length < 3 ? 'Name must be longer than 3 characters' : ''

        setNameError(check)
    }

    const validateEmail = (e) => {
        const validEmailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        const check = (!validEmailRegex.test(e.target.value)) ? 'Email must be in valid form' : ''

        setEmailError(check)
    }

    const validatePhone = (e) => {
        const validPhoneRegex = RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)

        const check = (!validPhoneRegex.test(e.target.value)) ? 'Phone must be in valid form 123-123-1213' : ''

        setPhoneError(check)
    }

    return (
        <div className='container'>
            <h1 className='title'>Contact Form</h1>
            <div className='contact'>
                <form id='contactForm' onSubmit={handleSumbit}>
                    <div className='name-field'>
                        <label>Name <span>*</span></label>
                        <input htmlFor='name' type='text' name='name' id='name' value={name} onBlur={validateName} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className='email-field'>
                        <label>Email <span>*</span></label>
                        <input htmlFor='email' type='email' name='email' id='email' onBlur={validateEmail} value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className='phone-field'>
                        <label>Phone</label>
                        <input htmlFor='phone' type='text' name='phone' id='phone' onBlur={validatePhone} value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className='message-field'>
                        <label>Message</label>
                        <textarea htmlFor='message' name='message' rows='5' id='message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className='required-field'>Required field <span>*</span></div>
                    <div className='submit-button'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage

ContactPage.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    message: PropTypes.string
}