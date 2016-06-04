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
        ...state.filter(assignment => assignment.title !== action.title),
        assignment(undefined, action)
      ]
    case 'GET_ASSIGNMENTS_SUCCESS':
      return action.assignments
    case 'GET_ASSIGNMENT_SUCCESS':
      return [
        ...state.filter(assignment => assignment.title !== action.title),
        action.assignment
      ]
    case 'LOGGED_OUT_SUCCESS':
      return []
    default:
      return state
  }
}

export default assignmentReducer
