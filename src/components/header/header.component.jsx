import React from 'react'

import { Link } from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <nav className='level'>
            <Link className='level-item' to='/about'>
                About
            </Link>
            <Link className='level-item' to='/'>
                <h1 className="title">Our National Parks</h1>
            </Link>
            <Link className='level-item' to='/deepDive'>
                Deep Dive
            </Link>
        </nav>
    </div>
)

export default Header