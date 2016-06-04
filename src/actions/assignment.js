export const addAssignmentRequest = ({title, content, token}) => {
  return (dispatch) => {
    fetch('/api/assignment', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      },
      body: `title=${title}&content=${content}`
    })
    .then(response => {
      if (response.status >= 200 || response.status < 300) {
        dispatch(addAssignmentSuccess({title, content}))
      }
    })
  }
}

export const addAssignmentSuccess = ({title, content}) => {
  return {
    type: 'ADD_ASSIGNMENT_SUCCESS',
    title,
    content
  }
}

export const getAssignmentsRequest = (token) => {
  return (dispatch) => {
    fetch('/api/assignments', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      // console.log(response.json())

      if (response.status >= 200 && response.status < 300) {
        return response.json()
      }
    })
    .then(response => {
      let assignments = response.assignments

      dispatch(getAssignmentsSuccess(assignments))
    })
  }
}

export const getAssignmentsSuccess = (assignments) => {
  return {
    type: 'GET_ASSIGNMENTS_SUCCESS',
    assignments
  }
}

export const getAssignmentRequest = ({title, token}) => {
  return (dispatch) => {
    fetch(`/api/assignment/${title}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      // console.log(response.json())

      if (response.status >= 200 && response.status < 300) {
        return response.json()
      }
    })
    .then(response => {
      let assignment = response.assignment

      dispatch(getAssignmentSuccess(assignment))
    })
  }
}

export const getAssignmentSuccess = (assignment) => {
  return {
    type: 'GET_ASSIGNMENT_SUCCESS',
    assignment
  }
}

