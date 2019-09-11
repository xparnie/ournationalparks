import React from 'react'

import { Link } from 'react-router-dom'

import '../../styles/header/_header.scss'

const Header = () => (
    <div className='header'>
        <div className="header-titles">
            <Link className='header-title' to='/'>
                <h1 className='header-title-text'>Our National Parks</h1>
            </Link>
            <div className="header-subtitle">
                <span className="header-subtitle">By: Andrew Kari</span>
            </div>
        </div>
        <nav className='level'>
            <div className="level-item">
                <Link className='header-link' to='/about'>
                    About
                </Link>
            </div>
            <div className="level-item">
                <Link className='header-link' to='/contact'>
                    Contact
                </Link>
            </div>
            <div className="level-item">
                <Link className='header-link' to='/deep-dive'>
                    Deep Dive
                </Link>
            </div>
        </nav>
    </div>
)

export default Header