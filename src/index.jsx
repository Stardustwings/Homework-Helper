import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { browserHistory } from 'react-router'
import indexReducer from './reducers/index'
import data from './data'

const routingMiddleware = routerMiddleware(browserHistory)

const store = createStore(
  indexReducer, data, compose(
    applyMiddleware(routingMiddleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(
  <Provider store={store}>
    {Router(history)}
  </Provider>,
root)
