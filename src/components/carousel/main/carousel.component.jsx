import React, { useState, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

import '../../../styles/carousel/_carousel.scss'
import Arrow from '../arrows/arrows.component'

const Carousel = ({ items }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1)
    const [currentHeight, setCurrentHeight] = useState(0)
    
    const slides = document.querySelectorAll('.carousel-item')

    useEffect(() => {
        setHeightHandler()
    }, [])

    useLayoutEffect(() => {
        window.addEventListener('resize', setHeightHandler)
    }, [currentHeight])

    const setHeightHandler = () => {
        const height = document.querySelector('.carousel').getBoundingClientRect().width / 1.45
        setCurrentHeight(height)
    }

    const onSlideClick = (direction) => {
        const previousIndex = items.length - 1
        let index = null

        // DOM ELements
        slides[currentImageIndex].style.zIndex = 1

        if (direction === 'left') {
            const resetIndex = currentImageIndex === 0
            index = resetIndex ? previousIndex : currentImageIndex - 1
        } else {
            const resetIndex = currentImageIndex === previousIndex
            index = resetIndex ? 0 : currentImageIndex + 1
        }

        setCurrentImageIndex(index)
    }

    return (
        <div className='carousel' style={{ height: `${currentHeight}` + 'px' }}>
            {items.map(({ id, imageUrl, altText, title, subTitle }) =>
                (<div key={id} className='carousel-item'>
                    <img className='carousel-item-image' src={`${imageUrl}`} alt={`${altText}`} />

                    <div className="carousel-item-headline">
                        <span className="carousel-item-headline-title">{title}</span>
                        <span className="carousel-item-headline-subtitle">{subTitle}</span>
                    </div>
                </div>))}
            <Arrow className='arrow next' direction="right" clickFunction={onSlideClick} glyph="&#xf054;" />
            <Arrow className='arrow previous' direction="left" clickFunction={() => onSlideClick('left')} glyph="&#xf053;" />
        </div>
    )
}

export default Carousel

Carousel.propTypes = { currentImageIndex: PropTypes.number }