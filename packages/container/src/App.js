import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/MarketingApp.js'
import Header from './components/Header.js'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}