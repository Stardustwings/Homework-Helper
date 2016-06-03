import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import assignmentReducer from './assignmentReducer'
import homeworkReducer from './homeworkReducer'
import userReducer from './userReducer'

const indexReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  assignments: assignmentReducer,
  homeworks: homeworkReducer
})

export default indexReducer