import React from 'react'
import { Router, Route, IndexRedirect, Redirect } from 'react-router'
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import AppContainer from './containers/AppContainer'
import LoginContainer from './containers/LoginContainer'
import AssignmentListContainer from './containers/AssignmentListContainer'
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

const UserIsAdmin = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/assignment-list',
  wrapperDisplayName: 'UserIsAdmin',
  predicate: user => user.type === 'teacher',
  allowRedirectBack: false
})

export default (history)=> (
  <Router history={history}>
    <Route path='/' component={AppContainer}>
      <Route path='login' component={LoginContainer}/>
      <Route path='assignment-list' component={UserIsAuthenticated(AssignmentListContainer)}/>
      <Route path='assignment-detail/:id' component={UserIsAuthenticated(AssignmentDetailContainer)}/>
      <Route path='homework-detail/:id' component={UserIsAuthenticated(HomeworkDetailContainer)}/>
      <Route path='user-management' component={UserIsAuthenticated(UserIsAdmin(UserManagementContainer))}/>
      <Route path='publish' component={UserIsAuthenticated(UserIsAdmin(PublishContainer))}/>
      <Route path='submit/:id' component={UserIsAuthenticated(SubmitContainer)}/>
    </Route>
  </Router>
)
