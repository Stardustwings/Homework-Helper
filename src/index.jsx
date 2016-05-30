import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import homeworkSystem from './reducers/index'
import data from './data'

let store = createStore(homeworkSystem, data,
  window.devToolsExtension && window.devToolsExtension()
)

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(
  <Provider store={store}>
    {Router}
  </Provider>,
root)
