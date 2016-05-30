const assignment = (state, action) => {
  switch (action.type) {
    case 'ADD_ASSIGNMENT':
      return {
        title: action.title,
        content: action.content
      }
    default:
      return state
  }
}

const assignments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ASSIGNMENT':
      return [
        ...state,
        assignment(undefined, action)
      ]
    default:
      return state
  }
}

export default assignments
