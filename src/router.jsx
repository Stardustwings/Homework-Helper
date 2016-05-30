import React from 'react'
import { Router, Route, IndexRedirect, Redirect } from 'react-router'
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import App from './components/App/App'
import LoginContainer from './containers/LoginContainer'
import Register from './components/Register/Register'
import AssignmentContainer from './containers/AssignmentContainer'
import HomeworkList from './components/HomeworkList/HomeworkList'
import UserManagement from './components/UserManagement/UserManagement'
import PublishContainer from './containers/PublishContainer'
import Submit from './components/Submit/Submit'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default (history)=> (
  <Router history={history}>
    <Route path='/' component={App}>
      <Route path='login' component={LoginContainer}/>
      <Route path='register' component={Register}/>
      <Route path='assignment-list' component={UserIsAuthenticated(AssignmentContainer)}/>
      <Route path='homework-list/:id' component={(HomeworkList)}/>
      <Route path='user-management' component={UserManagement}/>
      <Route path='publish' component={PublishContainer}/>
      <Route path='submit' component={Submit}/>
    </Route>
  </Router>
)
