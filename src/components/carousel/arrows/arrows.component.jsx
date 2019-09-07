import React from 'react'

import './arrows.styles.scss'

const Arrow = ({ direction, clickFunction }) => (
    <div className={`carousel-arrow carousel-arrow_${direction}`} onClick={ clickFunction }><i className={`fas fa-chevron-${direction}`}></i></div>
)

export default Arrow