import React from 'react'

import '../../styles/aboutPage/_aboutPage.scss'

const AboutPage = () => (
    <div className="container">
        <div className="aboutPage">
            <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
                <div className="column is-square">
                    <img src="https://i.ibb.co/2Kx4Gz7/xparnie.jpg" alt="Andrew Kari #me" />
                </div>
                <div className="column is-child">
                    <div className="aboutPage-content">
                        <h2 class="aboutPage-content-title">Andrew Kari</h2>
                        <p>I’ve been a photographer for roughly 15 years now. I started in my high school dark room and fell in love with the art immediately. The art of photography is something that deserves to be shared and loved by all, no matter your skill level. Anyone can take a great picture. My photographs are just my perspective on my adventures, but I encourage everyone to explore and take photographs of your own. If mine happen to inspire you, cheers.</p>
                        <p>I’ve also been an avid backpacker for quite a while now. I believe in doing things that get out of your comfort zone and try to do it at least 1-2 times per year minimum.</p>
                        <p>I will have limited runs of prints available. I will personally frame and sign each piece and ship it your way.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default AboutPage