import React from 'react'
import PropTypes from 'prop-types'

// import Header from '../../components/header/header.component'

import './homepage.styles.scss'

import IMAGE_DATA from '../../data/image'

import Carousel from '../../components/carousel/main/carousel.component'

class HomePage extends React.Component {
    constructor() {
        super()

        this.state = {
            collections: IMAGE_DATA
        }
    }

    render() {
        const { collections } = this.state

        return (
            <div className="homepage">
                {collections.filter((collection) => collection.title === 'National Parks').map(({ id, ...otherCollectionProps }) => (
                    <Carousel key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default HomePage

Carousel.propTypes = {
    collections: PropTypes.object
}