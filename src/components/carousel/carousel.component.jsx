import React from 'react'

import '../carousel/carousel.styles.scss'

export const Carousel = (props) => (
    <div className='carousel'>
        { props.carousel.map(carouselItem => (
            <CarouselItem key={CarouselItem.id} carousel={carousel}
        ))}
    </div>
)