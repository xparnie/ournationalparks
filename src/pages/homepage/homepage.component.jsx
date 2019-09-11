import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../../styles/homePage/_homePage.scss'
import '../../styles/heroBlock/_heroBlock.scss'

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
                <div className="homepage-carousel">
                    {collections.filter((collection) => collection.title === 'NationalParks').map(({ id, ...otherCollectionProps }) => (
                        <Carousel key={id} {...otherCollectionProps} />
                    ))}
                </div>
                <div className="container">
                    <div className="heroBlock">
                        <div className="heroBlock-media">
                            <img src="../images/sunset.jpg" alt="Sunset over the mountains in Flagstaff, AZ" />
                        </div>
                        <div className="heroBlock-content">
                            <h1 className="heroBlock-content-title">Exploring America</h1>
                            <p className="heroBlock-content-body">I've visited 15/58 National Parks, so far</p>
                            <Link className='heroBlock-content-button' to='/about'>
                                About
                            </Link>

                        </div>
                    </div>

                    <div className="heroBlock">
                        <div className="heroBlock-content">
                            <h1 className="heroBlock-content-title">Learn About the Pictures</h1>
                            <Link className='heroBlock-content-button' to='/deep-dive'>
                                Deep Dive
                            </Link>
                        </div>
                        <div className="heroBlock-media">
                            <img src="../images/between-the-joshua-trees.jpg" alt="Moon between branches of Joshua Tree" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage

Carousel.propTypes = {
    collections: PropTypes.object
}