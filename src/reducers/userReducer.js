const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'USER_LOGGED_IN':
      return payload
    case 'USER_LOGGED_OUT':
      return {}
    default:
      return state
  }
}

export default userReducer
