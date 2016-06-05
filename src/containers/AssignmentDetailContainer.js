import { connect } from 'react-redux'
import AssignmentDetail from './../components/Assignment/AssignmentDetail'
import {getAssignmentRequest} from './../actions/assignment'
import {getHomeworksRequest} from './../actions/homework'
import { routerActions } from 'react-router-redux'

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
    // homeworks: [1,2,3,4,5,6,7,8].map(a=>({assignment: a, author: a, title: a, content: a})),
    homeworks: state.homeworks,
    title: ownProps.params.id,
    content: getAssignmentByTitle({title: ownProps.params.id, state})
  }
}

const AssignmentDetailContainer = connect(
  mapStateToProps,
  {getAssignment: getAssignmentRequest, getHomeworks: getHomeworksRequest, push: routerActions.push}
)(AssignmentDetail)

export default AssignmentDetailContainer
