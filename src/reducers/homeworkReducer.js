const homework = (state, {type, assignment, author, title, content}) => {
  switch (type) {
    case 'ADD_ASSIGNMENT_SUCCESS':
      return { assignment, author, title, content }
    default:
      return state
  }
}

const homeworkReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOMEWORK_SUCCESS':
      return [
        ...state,
        homework(undefined, action)
      ]
    case 'ADD_HOMEWORK_FAILURE':
      return state.filter(homework => (homework.assignment !== action.assignment && homework.author !== action.author))
    case 'GET_HOMEWORKS_SUCCESS':
      return action.homeworks
    default:
      return state
  }
}

export default homeworkReducer
