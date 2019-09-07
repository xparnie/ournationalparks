import React from 'react'

import '../carousel-item/carousel-item.styles.scss'

const CarouselItem = ( { id, title, altText, imageUrl } ) => (
    <div className='carouselItem'>

        <img className='carouselItem-image' src={`${imageUrl}`} alt="altText"/>

        <div className="carouselItem-headline">
            <span className="carsouelItem-headline-title">{ title }</span>
        </div>
    </div>
)

export default CarouselItem