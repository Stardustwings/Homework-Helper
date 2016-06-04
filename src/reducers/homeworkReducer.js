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
        ...state.filter(homework => (homework.assignment !== action.assignment && homework.author !== action.author)),
        homework(undefined, action)
      ]
    case 'GET_HOMEWORKS_SUCCESS':
      return action.homeworks
      case 'GET_HOMEWORK_SUCCESS':
      return [
        ...state.filter(homework => (homework.assignment !== action.assignment && homework.author !== action.author)),
        action.homework
      ]
    case 'LOGGED_OUT_SUCCESS':
      return []
    default:
      return state
  }
}

export default homeworkReducer
