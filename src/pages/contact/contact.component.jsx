import React, { useState } from 'react'
import firebaseConfig from '../../Firebase'
import 'firebase/database'
import PropTypes from 'prop-types'

import '../../styles/contact/_contact.scss'

const ContactPage = () => {

    /**
     * DOM Elements
     */
    const nameInput = document.querySelector('.name-input-error')
    const emailInput = document.querySelector('.email-input-error')
    const phoneInput = document.querySelector('.phone-input-error')
    const submitButton = document.querySelector('.submit-content-button')

    /**
     * Setting Hooks
     */
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const { name, email, phone, message } = form

    const [formError, setFormError] = useState({
        nameError: '',
        emailError: '',
        phoneError: ''
    })

    const { nameError, emailError, phoneError } = formError

    /**
     * Handles Input Change Events
     */
    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value })
    }

    /**
     * Handles Form Submit Event
     */
    const handleSumbit = (e) => {
        e.preventDefault()

        if (nameError.length || emailError.length || phoneError.length) { return alert('Please fill out form correctly') }

        firebaseConfig.database().ref('our-national-parks').set({
            name: name,
            email: email,
            phone: phone,
            message: message
        })

        const successDOM = document.querySelector('.contactForm-field-success')

        successDOM.style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(() => {
            successDOM.style.display = 'none';
        }, 3000);

        document.getElementById('contactForm').reset()
    }

    const validate = (e) => {
        // Desctructuring
        const { value, name } = e.target;

        let check

        switch (name) {
            case 'name':
                check = value.length < 3 ? 'Name must be longer than 3 characters' : ''
                !check.length ? nameInput.classList.remove('active') : nameInput.classList.add('active')
                break;
            case 'email':
                const validEmailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

                check = (!validEmailRegex.test(value)) ? 'Email must be in valid form' : ''
                !check.length ? emailInput.classList.remove('active') : emailInput.classList.add('active')
                break;
            case 'phone':
                const validPhoneRegex = RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)

                check = (!validPhoneRegex.test(value)) ? 'Phone must be in valid form 123-123-1213' : ''
                !check.length ? phoneInput.classList.remove('active') : phoneInput.classList.add('active')
                break;
            default:
                break;
        }

        setFormError({ ...formError, [name + 'Error']: check })

        nameError || emailError || phoneError ? submitButton.disabled = false : submitButton.disabled = true
    }

    return (
        <div className='container'>
            <div className='contact'>
                <form id='contactForm' onSubmit={handleSumbit}>
                    <h1 className='contactForm-title'>Contact Me</h1>
                    <div className='contactForm-field'>
                        <label className='contactForm-field-label'>Name <span>*</span></label>
                        <input className="contactForm-field-input" htmlFor='name' type='text' name='name' id='name' value={name} onBlur={validate} onChange={handleChange} required />
                        <span className="name-input-error error">Name must be longer than 3 characters</span>
                    </div>
                    <div className='contactForm-field'>
                        <label className='contactForm-field-label'>Email <span>*</span></label>
                        <input className="contactForm-field-input" htmlFor='email' type='email' name='email' id='email' onBlur={validate} value={email} onChange={handleChange} required />
                        <span className="email-input-error error">Email must be in valid form</span>
                    </div>
                    <div className='contactForm-field'>
                        <label className='contactForm-field-label'>Phone</label>
                        <input className="contactForm-field-input" htmlFor='phone' type='text' name='phone' id='phone' onBlur={validate} value={phone} onChange={handleChange} />
                        <span className="phone-input-error error">Phone must be in valid form 123-123-1213</span>
                    </div>
                    <div className='contactForm-field'>
                        <label className='contactForm-field-label'>Message</label>
                        <textarea className="contactForm-field-input" htmlFor='message' name='message' rows='5' id='message' value={message} onChange={handleChange}></textarea>
                    </div>
                    <div className='contactForm-field'>
                        <div className='submit-content'>
                            <button className='submit-content-button' type='submit' disabled>Submit</button>
                        </div>
                        <div className="contactForm-field-success">Your message has been sent, Cheers!</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage

ContactPage.propTypes = {
    name: PropTypes.string,
    nameError: PropTypes.string,
    email: PropTypes.string,
    emailError: PropTypes.string,
    phone: PropTypes.string,
    phoneError: PropTypes.string,
    message: PropTypes.string
}