import React from 'react'

import { Link } from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <nav className='level'>
            <Link className='level-item' to='/'>
                Home
            </Link>
            <Link className='level-item' to='/about'>
                About
            </Link>
        </nav>
    </div>
)

export default Header