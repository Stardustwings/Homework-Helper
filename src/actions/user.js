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
