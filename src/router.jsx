import React from 'react'
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router'
import App from 'App/App'
import Login from 'Login/Login'
import Register from 'Register/Register'
import AssignmentList from 'AssignmentList/AssignmentList'
import HomeworkList from 'HomeworkList/HomeworkList'
import UserManagement from 'UserManagement/UserManagement'
import Publish from 'Publish/Publish'
import Submit from 'Submit/Submit'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='login' component={Login}/>
      <Route path='register' component={Register}/>
      <Route path='assignment-list' component={AssignmentList}/>
      <Route path='homework-list/:id' component={HomeworkList}/>
      <Route path='user-management' component={UserManagement}/>
      <Route path='publish' component={Publish}/>
      <Route path='submit' component={Submit}/>
      <IndexRedirect to='login' />
      <Redirect from='*' to='login'/>
    </Route>
  </Router>
)
