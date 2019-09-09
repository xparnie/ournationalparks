import React from 'react'
import PropTypes from 'prop-types'

import '../main/carousel.styles.scss'
import Arrow from '../arrows/arrows.component'

class Carousel extends React.Component {
    constructor() {
        super()

        this.state = {
            currentImageIndex: 0
        }

        this.onSlideClick = this.onSlideClick.bind(this)
    }

    onSlideClick(direction) {
        const previousIndex = this.props.items.length - 1
        const { currentImageIndex } = this.state
        let index = undefined

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

        const { currentImageIndex } = this.state

        return (
            <div className='carousel'>

                <Arrow className='arrow previous' direction="left" clickFunction={() => this.onSlideClick('left')} glyph="&#xf053;" />

                {this.props.items
                    .filter(({ id }) => (id - 1) === currentImageIndex)
                    .map(({ id, imageUrl, altText, title, subTitle }) =>
                        (<div key={id} className='carousel-item'>
                            <img className='carousel-item-image' src={`${imageUrl}`} alt={`${altText}`} />

                            <div className="carousel-item-headline">
                                <span className="carousel-item-headline-title">{title}</span>
                                <span className="carousel-item-headline-subtitle">{subTitle}</span>
                            </div>
                        </div>))}

                <Arrow className='arrow next' direction="right" clickFunction={this.onSlideClick.bind(this, currentImageIndex)} glyph="&#xf054;" />

            </div>
        )
    }
}

export default Carousel

Carousel.propTypes = { currentImageIndex: PropTypes.number }