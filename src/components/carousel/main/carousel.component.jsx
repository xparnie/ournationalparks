import React from 'react'

import '../main/carousel.styles.scss'

import CarouselItem from '../../carousel-item/carousel-item.component'

// Add-on
import Arrow from '../arrows/arrows.component'

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        console.log(props)

        this.state = {
            currentImageIndex: 0
        }

        this.nextSlide = this.nextSlide.bind(this)
        this.previousSlide = this.previousSlide.bind(this)
    }

    previousSlide() {
        const lastIndex = this.props.items.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === 0
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

        this.setState({
            currentImageIndex: index
        })
    }

    nextSlide() {
        const lastIndex = this.props.items.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === lastIndex
        const index = shouldResetIndex ? 0 : currentImageIndex + 1

        this.setState({
            currentImageIndex: index
        })
    }

    render() {
        return (
            <div className='carousel'>
                <Arrow className='arrow previous' direction="left" clickFunction={this.previousSlide} glyph="&#xf053;" />
                <CarouselItem key={this.props.items[this.state.currentImageIndex].id} {...this.props.items[this.state.currentImageIndex]} />
                <Arrow className='arrow next' direction="right" clickFunction={this.nextSlide} glyph="&#xf054;" />
            </div>
        )
    }
}


export default Carousel
