import { connect } from 'react-redux'
import Submit from './../components/Submit/Submit'
import {addHomeworkRequest} from './../actions/homework'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addHomework: ({assignment, author, title, content, token}) => {
      dispatch(addHomeworkRequest({assignment, author, title, content, token}))
    }
  }
}

const SubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Submit)

export default SubmitContainer
