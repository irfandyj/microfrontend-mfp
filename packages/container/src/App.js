import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header.js'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { createBrowserHistory } from 'history'

import Progress from './components/Progress.js'
const MarketingLazy = lazy(() => import('./components/MarketingApp.js'))
const AuthLazy = lazy(() => import('./components/AuthApp.js'))
const DashboardLazy = lazy(() => import('./components/DashboardApp.js'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                { !isSignedIn && <Redirect to="/" /> }
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}