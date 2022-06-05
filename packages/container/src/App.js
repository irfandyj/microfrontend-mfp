import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header.js'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

import MarketingApp from './components/MarketingApp.js'
import AuthApp from './components/AuthApp.js'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp}></Route>
            <Route path="/" component={MarketingApp}></Route>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}