import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import assignmentReducer from './assignmentReducer'
import userReducer from './userReducer'

const indexReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  assignments: assignmentReducer
})

export default indexReducer