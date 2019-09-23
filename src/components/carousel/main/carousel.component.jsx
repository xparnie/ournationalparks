/*jshint esversion: 6 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/carousel/_carousel.scss';
import Arrow from '../arrows/arrows.component';

const Carousel = ({ items }) => {

    // Hooks
    const [totalCarouselItems, setTotalCarouselItems] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // DOM Elements
    const slideTransform = {
        'transform': `translateX(-${currentImageIndex * ( 100 / totalCarouselItems )}%)`
    }

    useEffect(() => {
        setTotalCarouselItems(items.length)

    }, [items.length]);

    const onSlideClick = (direction) => {
        slideIndexHandler(direction);
    };

    const slideIndexHandler = (direction) => {

        let index = null;

        if (direction === 'left') {
            index = (currentImageIndex <= 0) ? 
            totalCarouselItems - 1 : 
            currentImageIndex - 1;
        } else {
            index = (currentImageIndex === totalCarouselItems - 1) 
            ? 0 
            : currentImageIndex + 1;
        }

        setCurrentImageIndex(index)
    };

    const imageLoad = (e) => {
        e.target.style.opacity = 1
    }

    return (
        <div className="carousel">
            <ul 
                className='carousel_wrap' 
                style={slideTransform}
            >
                {items.map(({ id, imageUrl, altText, title, subTitle }) =>
                    (<li 
                        key={id} 
                        className='carousel-item'
                    >
                        <img 
                            className='carousel-item-image' 
                            src={`${imageUrl}`} alt={`${altText}`}
                            onLoad={imageLoad}    
                        />

                        <div className='carousel-item-headline'>
                            <span className='carousel-item-headline-title'>{title}</span>
                            <span className='carousel-item-headline-subtitle'>{subTitle}</span>
                        </div>
                    </li>))}
            </ul>
            <Arrow 
                className='arrow next' 
                direction='right' 
                clickFunction={onSlideClick} 
                glyph='&#xf054;' 
            />
            <Arrow 
                className='arrow previous' 
                direction='left' 
                clickFunction={() => onSlideClick('left')} 
                glyph='&#xf053;' 
            />
        </div>
    );
};

export default Carousel;

Carousel.propTypes = {
    currentImageIndex: PropTypes.number,
    currentHeight: PropTypes.number
};