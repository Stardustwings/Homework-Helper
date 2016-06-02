const userReducer = (state = {}, { type, user }) => {
  switch (type) {
    case 'LOGGED_IN_SUCCESS':
      return user
    case 'LOGGED_OUT_SUCCESS':
      return {}
    default:
      return state
  }
}

export default userReducer
