import React from 'react'
import PropTypes from 'prop-types'

import '../../../styles/carousel/_carousel.scss'
import Arrow from '../arrows/arrows.component'

class Carousel extends React.Component {
    constructor() {
        super()

        this.state = {
            currentImageIndex: 1
        }

        this.onSlideClick = this.onSlideClick.bind(this)
    }

    componentDidMount() {
        const slides = document.querySelectorAll('.carousel-item')
        slides.forEach(el => el.style.zIndex = -1)
        slides[0].style.zIndex = null

        const getHeight = document.querySelector('.carousel').getBoundingClientRect().width

        document.querySelector('.carousel').style.height = (getHeight / 1.45) + "px";
    }

    onSlideClick(direction) {
        const previousIndex = this.props.items.length - 1
        const { currentImageIndex } = this.state
        let index = undefined

        const slides = document.querySelectorAll('.carousel-item')
        
        // Resets z-index of carousel items and brings currentImage to front
        slides.forEach(el => el.style.zIndex = -1)
        slides[currentImageIndex].style.zIndex = 1

        

        if (direction === 'left') {
            const resetIndex = currentImageIndex === 0
            index = resetIndex ? previousIndex : currentImageIndex - 1
        } else {
            const resetIndex = currentImageIndex === previousIndex
            index = resetIndex ? 0 : currentImageIndex + 1
        }

        this.setState({
            currentImageIndex: index
        })
    }

    render() {

        return (
            <div className='carousel' >
            
                <Arrow className='arrow previous' direction="left" clickFunction={() => this.onSlideClick('left')} glyph="&#xf053;" />
                {this.props.items
                    .map(({ id, imageUrl, altText, title, subTitle }) =>
                        (<div key={id} className='carousel-item'>
                            <img className='carousel-item-image' src={`${imageUrl}`} alt={`${altText}`} />

                            <div className="carousel-item-headline">
                                <span className="carousel-item-headline-title">{title}</span>
                                <span className="carousel-item-headline-subtitle">{subTitle}</span>
                            </div>
                        </div>))}

                <Arrow className='arrow next' direction="right" clickFunction={this.onSlideClick} glyph="&#xf054;" />

            </div>
        )
    }
}

export default Carousel

Carousel.propTypes = { currentImageIndex: PropTypes.number }