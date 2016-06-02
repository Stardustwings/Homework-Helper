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
