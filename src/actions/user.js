import jwtDecode from 'jwt-decode'

export function loginRequest({username, password}) {
  return function(dispatch) {
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

export function loginSuccess(user) {
  return {
    type: 'LOGGED_IN_SUCCESS',
    user
  }
}

export function logoutSuccess() {
  return {
    type: 'LOGGED_OUT_SUCCESS'
  }
}

export const getUsersRequest = (token) => {
  return (dispatch) => {
    fetch('/api/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      // console.log(response.json())

      if (response.status >= 200 && response.status < 300) {
        return response.json()
      }
    })
    .then(response => {
      let users = response.users

      dispatch(getUsersSuccess(users))
    })
  }
}

export const getUsersSuccess = (users) => {
  return {
    type: 'GET_USERS_SUCCESS',
    users
  }
}

export const addUserRequest = ({username, password, type, token}) => {
  return (dispatch) => {
    fetch('/api/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      },
      body: `username=${username}&password=${password}&type=${type}`
    })
    .then(response => {
      if (response.status >= 200 || response.status < 300) {
        dispatch(addUserSuccess({username, password, type}))
      }
    })
  }
}

export const addUserSuccess = ({username, password, type}) => {
  return {
    type: 'ADD_USER_SUCCESS',
    username,
    password,
    usertype: type
  }
}
