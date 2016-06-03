import { connect } from 'react-redux'
import HomeworkDetail from './../components/Homework/HomeworkDetail'
import {getHomeworkRequest} from './../actions/homework'

const getTitleAndState = ({state, assignment, author}) => {
  let homeworks = state.homeworks

  for (let i = 0; i < homeworks.length; i++) {
    if (homeworks[i].assignment === assignment && homeworks[i].author === author) {
      return {title: homeworks[i].title, content: homeworks[i].content}
    }
  }

  return {title: '', content: ''}
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.params.id,
      assignment = id.split('&')[0],
      author = id.split('&')[1],
      {title, content} = getTitleAndState({state, assignment, author})

  return {
    assignment,
    author,
    title,
    content
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHomework: ({assignment, author, token}) => {
      dispatch(getHomeworkRequest({assignment, author, token}))
    }
  }
}

const HomeworkDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeworkDetail)

export default HomeworkDetailContainer
