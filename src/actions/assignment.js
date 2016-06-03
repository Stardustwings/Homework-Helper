export const addAssignment = (title, content) => {
  return {
    type: 'ADD_ASSIGNMENT',
    title,
    content
  }
}

export const getAssignmentsRequest = (token) => {
  return (dispatch) => {
    fetch('api/assignments', {
      method: 'GET',
      headers: {
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
