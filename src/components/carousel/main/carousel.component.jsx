/*jshint esversion: 6 */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/carousel/_carousel.scss';
import Arrow from '../arrows/arrows.component';

const Carousel = ({ items }) => {
    
    // Hooks
    const [totalCarouselItems, setTotalCarouselItems] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    const [previousImageIndex, setPreviousImageIndex] = useState(0);
    const [currentHeight, setCurrentHeight] = useState(0);
    
    // DOM Elements
    const slides = document.querySelectorAll('.carousel-item');

    useEffect(() => {
        setTotalCarouselItems(items.length - 1);
        setHeightHandler();
    }, [items.length]);

    useLayoutEffect(() => {
        window.addEventListener('resize', setHeightHandler);
    }, [currentHeight]);

    const setHeightHandler = () => {
        const height = document.querySelector('.carousel').getBoundingClientRect().width / 1.5;
        setCurrentHeight(height);
    };

    const onSlideClick = (direction) => {
        slideShowHideHandler();
        slideIndexHandler(direction);
    };

    const slideIndexHandler = (direction) => {
        let index = null;
        
        if (direction === 'left') {
            const resetIndex = currentImageIndex === 0;
            index = resetIndex ? totalCarouselItems : currentImageIndex - 1;
        } else {
            const resetIndex = currentImageIndex === totalCarouselItems;
            index = resetIndex ? 0 : currentImageIndex + 1;
        }
        
        setPreviousImageIndex(currentImageIndex);
        setCurrentImageIndex(index);
    };

    const slideShowHideHandler = () => {
        slides[previousImageIndex].style.zIndex = -1;
        slides[currentImageIndex].style.zIndex = 1;
    };

    return (
        <div className='carousel' style={{ height: `${currentHeight}px` }}>
            {items.map(({ id, imageUrl, altText, title, subTitle }) =>
                (<div key={id} className='carousel-item'>
                    <img className='carousel-item-image' src={`${imageUrl}`} alt={`${altText}`} />

                    <div className='carousel-item-headline'>
                        <span className='carousel-item-headline-title'>{title}</span>
                        <span className='carousel-item-headline-subtitle'>{subTitle}</span>
                    </div>
                </div>))}
            <Arrow className='arrow next' direction='right' clickFunction={onSlideClick} glyph='&#xf054;' />
            <Arrow className='arrow previous' direction='left' clickFunction={() => onSlideClick('left')} glyph='&#xf053;' />
        </div>
    );
};

export default Carousel;

Carousel.propTypes = { 
    currentImageIndex: PropTypes.number, 
    currentHeight: PropTypes.number
};