import React from 'react'

import '../carousel-item/carousel-item.styles.scss'

const CarouselItem = ( { id, title, altText, imageUrl } ) => (
    <div className='carouselItem'>

        <div className='carouselItem-image' alt={ altText } style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: '100%',
            backgroundPosition: 'cover' 
        }}></div>

        <div className="carouselItem-headline">
            <span className="carsouelItem-headline-title">{ title }</span>
        </div>
    </div>
)

export default CarouselItem