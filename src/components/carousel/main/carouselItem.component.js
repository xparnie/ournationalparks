import React from 'react';

const CarouselItem = ({ id, imageUrl, altText, title, subTitle }) => {

    const imageLoad = e => {
        e.target.style.opacity = 1;
    };

    return (
        <li key={id} className='carousel-list-item'>
            <img className='carousel-list-item-image' onLoad={ imageLoad } src={`${ imageUrl }`} alt={`${ altText }`} />

            <div className='carousel-list-item-headline'>
                <span className='carousel-list-item-headline-title'>{title}</span>
                <span className='carousel-list-item-headline-subtitle'>{subTitle}</span>
            </div>
        </li>
    );
};

export default CarouselItem;