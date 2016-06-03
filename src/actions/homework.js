export const addHomeworkRequest = ({assignment, author, title, content, token}) => {
  return (dispatch) => {
    fetch('/api/homework', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      },
      body: `assignment=${assignment}&author=${author}&title=${title}&content=${content}`
    })
    .then(response => {
      if (response.status < 200 || response.status >= 300) {
        dispatch(addHomeworkSuccess({assignment, author, title, content}))
      }
    })
  }
}

export const addHomeworkSuccess = ({assignment, author, title, content}) => {
  return {
    type: 'ADD_HOMEWORK_SUCCESS',
    assignment,
    author,
    title,
    content
  }
}

export const getHomeworksRequest = ({assignment, token}) => {
  return (dispatch) => {
    fetch(`/api/homeworks/${assignment}`, {
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
      let homeworks = response.homeworks

      dispatch(getHomeworksSuccess(homeworks))
    })
  }
}

export const getHomeworksSuccess = (homeworks) => {
  return {
    type: 'GET_HOMEWORKS_SUCCESS',
    homeworks
  }
}
