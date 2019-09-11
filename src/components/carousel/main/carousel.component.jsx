import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import '../../../styles/carousel/_carousel.scss'
import Arrow from '../arrows/arrows.component'

const Carousel = ({ items }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1)
    
    useEffect(() => {
        const slides = document.querySelectorAll('.carousel-item')
        slides.forEach(el => el.style.zIndex = -1)
        slides[0].style.zIndex = null
        
        // Rather gross, but kinda works?
        const getHeight = document.querySelector('.carousel').getBoundingClientRect().width
        document.querySelector('.carousel').style.height = (getHeight / 1.45) + "px";
    }, [])

    const onSlideClick = (direction) => {
        const previousIndex = items.length - 1
        let index
        
        const slides = document.querySelectorAll('.carousel-item')
        slides.forEach(el => el.style.zIndex = 0)
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
        <div className='carousel'>
            <Arrow className='arrow previous' direction="left" clickFunction={() => onSlideClick('left')} glyph="&#xf053;" />
            {items.map(({ id, imageUrl, altText, title, subTitle }) =>
                (<div key={id} className='carousel-item'>
                    <img className='carousel-item-image' src={`${imageUrl}`} alt={`${altText}`} />

                    <div className="carousel-item-headline">
                        <span className="carousel-item-headline-title">{title}</span>
                        <span className="carousel-item-headline-subtitle">{subTitle}</span>
                    </div>
                </div>))}
            <Arrow className='arrow next' direction="right" clickFunction={onSlideClick} glyph="&#xf054;" />
        </div>
    )
}

export default Carousel

Carousel.propTypes = { currentImageIndex: PropTypes.number }