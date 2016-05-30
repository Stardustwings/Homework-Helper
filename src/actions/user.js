export function login(payload) {
  return {
    type: 'USER_LOGGED_IN',
    payload
  }
}

export function logout() {
  return {
    type: 'USER_LOGGED_OUT'
  }
}
