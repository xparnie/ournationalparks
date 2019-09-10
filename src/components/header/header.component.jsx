import React from 'react'

import { Link } from 'react-router-dom'

import '../../styles/header/_header.scss'

const Header = () => (
    <div className='header'>
        <div className="header-titles">
            <Link className='header-title' to='/'>
                <h1>Our National Parks</h1>
            </Link>
            <div className="header-subtitle">
                <span className="header-subtitle">By: Andrew Kari</span>
            </div>
        </div>
        <nav className='level'>
            <Link className='level-item' to='/about'>
                About
            </Link>
            <Link className='level-item' to='/deep-dive'>
                Deep Dive
            </Link>
        </nav>
    </div>
)

export default Header