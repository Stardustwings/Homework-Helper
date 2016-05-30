import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import Login from './../components/Login/Login'
import {login} from './../actions/user'

const mapStateToProps = (state, ownProps) => {
  const isAuthenticated = state.user.username || false
  const redirect = ownProps.location.query.redirect || '/'
  return {
    isAuthenticated,
    redirect
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  { login, replace: routerActions.replace }
)(Login)

export default LoginContainer
