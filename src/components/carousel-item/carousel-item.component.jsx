import React from 'react'

import '../carousel-item/carousel-item.styles.scss'

export CarouselItem = (props) => (
    <div className='carouselItem'>
        <img alt={ props.CarouselItem.altText } src='' />

        <div className="carouselItem-headline">
            <span className="carsouelItem-headline-title">{ props.CarouselItem.title }</span>
        </div>
    </div>
)