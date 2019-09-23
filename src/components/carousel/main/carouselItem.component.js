import React from 'react'

const CarouselItem = () => {




    return (
        <li 
            ref={slide}
            key={id} 
            className='carousel-item'
        >
            <img className='carousel-item-image' src={`${imageUrl}`} alt={`${altText}`} />

            <div className='carousel-item-headline'>
                <span className='carousel-item-headline-title'>{title}</span>
                <span className='carousel-item-headline-subtitle'>{subTitle}</span>
            </div>
        </li>
    )
}

export default CarouselItem