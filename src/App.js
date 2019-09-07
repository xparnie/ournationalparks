import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

// Pages
import HomePage from './pages/homepage/homepage.component'

/**
 * Global Components
 */
import Header from './components/header/header.component'

/**
 * Internal Components
 */
// import Carousel from './components/carousel/carousel.component'
// import CarouselItem from './components/carousel-item/carousel-item.component'

function App() {
  return (
    <div className="react-wrapper">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
