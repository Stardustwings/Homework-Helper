import React from 'react'
import { Router, Route, IndexRedirect, Redirect } from 'react-router'
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import AppContainer from './containers/AppContainer'
import LoginContainer from './containers/LoginContainer'
import AssignmentContainer from './containers/AssignmentContainer'
import AssignmentDetailContainer from './containers/AssignmentDetailContainer'
import HomeworkDetailContainer from './containers/HomeworkDetailContainer'
import UserManagementContainer from './containers/UserManagementContainer'
import PublishContainer from './containers/PublishContainer'
import SubmitContainer from './containers/SubmitContainer'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default (history)=> (
  <Router history={history}>
    <Route path='/' component={AppContainer}>
      <Route path='login' component={LoginContainer}/>
      <Route path='assignment-list' component={UserIsAuthenticated(AssignmentContainer)}/>
      <Route path='assignment-detail/:id' component={(AssignmentDetailContainer)}/>
      <Route path='homework-detail/:id' component={(HomeworkDetailContainer)}/>
      <Route path='user-management' component={UserManagementContainer}/>
      <Route path='publish' component={PublishContainer}/>
      <Route path='submit/:id' component={SubmitContainer}/>
    </Route>
  </Router>
)
