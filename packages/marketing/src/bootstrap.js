import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
// Used by react-router-dom
// So you dont have to install
import { createMemoryHistory } from 'history'

const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory()

  // Temporary fix, will update again later
  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history} />, el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_marketing-dev-root')
  if (el) {
    mount(el, {})
  }
}

export { mount }