import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import Login from './../components/Login/Login'
import {loginSuccess} from './../actions/user'
import jwtDecode from 'jwt-decode'

function login(dispatch) {
  return function({username, password}) {
    fetch('api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `username=${username}&password=${password}`
    })
    .then(response => {
      // console.log(response.json())

      if (response.status >= 200 && response.status < 300) {
        return response.json()
      }
    })
    .then(response => {
      let token = response.token
      let user = jwtDecode(token)

      localStorage.setItem('token', token)
      dispatch(loginSuccess(user))
    })
  }
}

const mapStateToProps = (state, ownProps) => {
  const isAuthenticated = !!state.user.username || false
  const redirect = ownProps.location.query.redirect || '/assignment-list'
  return {
    isAuthenticated,
    redirect
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: login(dispatch),
    replace: url => dispatch(routerActions.replace(url))
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
