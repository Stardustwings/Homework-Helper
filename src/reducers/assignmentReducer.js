const assignment = (state, {type, title, content}) => {
  switch (type) {
    case 'ADD_ASSIGNMENT_SUCCESS':
      return { title, content }
    default:
      return state
  }
}

const assignmentReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ASSIGNMENT_SUCCESS':
      return [
        ...state,
        assignment(undefined, action)
      ]
    case 'ADD_ASSIGNMENT_FAILURE':
      return state.filter(assignment => assignment.title !== action.title)
    case 'GET_ASSIGNMENTS_SUCCESS':
      return action.assignments
    default:
      return state
  }
}

export default assignmentReducer
