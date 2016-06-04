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
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './global'

injectTapEventPlugin()

const initialState = {
  users: [],
  assignments: [],
  homeworks: []
}

const routingMiddleware = routerMiddleware(browserHistory)

const store = createStore(
  indexReducer, initialState, compose(
    applyMiddleware(routingMiddleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      {Router(history)}
    </Provider>
  </MuiThemeProvider>,
root)
