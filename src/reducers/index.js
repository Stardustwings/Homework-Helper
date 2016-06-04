import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import assignmentReducer from './assignmentReducer'
import homeworkReducer from './homeworkReducer'
import userReducer from './userReducer'
import usersReducer from './usersReducer'

const indexReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  users: usersReducer,
  assignments: assignmentReducer,
  homeworks: homeworkReducer
})

export default indexReducer