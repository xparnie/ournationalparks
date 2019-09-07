import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

// Pages
import HomePage from './pages/homepage/homepage.component'
import AboutPage from './pages/about/about.component'

/**
 * Global Components
 */
import Header from './components/header/header.component'

function App() {
  return (
    <div className="container is-fluid">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
      </Switch>
    </div>
  )
}

export default App
