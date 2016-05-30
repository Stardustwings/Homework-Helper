import React from 'react'
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router'
import App from './components/App/App'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AssignmentContainer from './containers/AssignmentContainer'
import HomeworkList from './components/HomeworkList/HomeworkList'
import UserManagement from './components/UserManagement/UserManagement'
import PublishContainer from './containers/PublishContainer'
import Submit from './components/Submit/Submit'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='login' component={Login}/>
      <Route path='register' component={Register}/>
      <Route path='assignment-list' component={AssignmentContainer}/>
      <Route path='homework-list/:id' component={HomeworkList}/>
      <Route path='user-management' component={UserManagement}/>
      <Route path='publish' component={PublishContainer}/>
      <Route path='submit' component={Submit}/>
      <IndexRedirect to='login' />
      <Redirect from='*' to='login'/>
    </Route>
  </Router>
)
