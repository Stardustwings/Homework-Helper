import { connect } from 'react-redux'
import AssignmentDetail from './../components/Assignment/AssignmentDetail'
import {getAssignmentRequest} from './../actions/assignment'
import {getHomeworksRequest} from './../actions/homework'

function getAssignmentByTitle({title, state}) {
  let assignments = state.assignments

  for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].title === title) {
      return assignments[i].content
    }
  }

  return ''
}

const mapStateToProps = (state, ownProps) => {
  return {
    homeworks: state.homeworks,
    title: ownProps.params.id,
    content: getAssignmentByTitle({title: ownProps.params.id, state})
  }
}

const AssignmentDetailContainer = connect(
  mapStateToProps,
  {getAssignment: getAssignmentRequest, getHomeworks: getHomeworksRequest}
)(AssignmentDetail)

export default AssignmentDetailContainer
