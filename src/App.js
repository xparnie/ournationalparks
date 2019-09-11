import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

/**
 * Global Components
 */
import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'
import Footer from './components/footer/footer.component'

// Pages
const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const AboutPage = lazy(() => import('./pages/about/about.component'))
const ContactPage = lazy(() => import('./pages/contact/contact.component'))
const DeepDivePage = lazy(() => import('./pages/deep-dive/deep-dive.component'))

function App() {
  return (
    <div className="container is-fluid">
      <BrowserRouter>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={ HomePage } />
              <Route exact path='/about' component={ AboutPage } />
              <Route exact path='/contact' component={ ContactPage } />
              <Route exact path='/deep-dive' component={ DeepDivePage } />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
