const user = (state, {type, username, usertype}) => {
  switch (type) {
    case 'ADD_USER_SUCCESS':
      return { username, type: usertype }
    default:
      return state
  }
}

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return action.users
    case 'ADD_USER_SUCCESS':
      return [
        ...state.filter(user => user.username !== action.username),
        user(undefined, action)
      ]
    default:
      return state
  }
}

export default usersReducer
