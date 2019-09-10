import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

// Pages
import HomePage from './pages/homepage/homepage.component'
import AboutPage from './pages/about/about.component'
import DeepDivePage from './pages/deep-dive/deep-dive.component'

/**
 * Global Components
 */
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

function App() {
  return (
    <div className="container is-fluid">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/about' component={ AboutPage } />
          <Route path='/deep-dive' component={ DeepDivePage } />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
