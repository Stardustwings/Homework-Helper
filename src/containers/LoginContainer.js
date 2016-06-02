import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import Login from './../components/Login/Login'
import {loginRequest} from './../actions/user'

const mapStateToProps = (state, ownProps) => {
  const isAuthenticated = !!state.user.username || false
  const redirect = ownProps.location.query.redirect || '/assignment-list'
  return {
    isAuthenticated,
    redirect
  }
}

const LoginContainer = connect(
  mapStateToProps,
  {login: loginRequest, replace: routerActions.replace}
)(Login)

export default LoginContainer
