import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import AssignmentList from './../components/Assignment/AssignmentList'
import {getAssignmentsRequest} from './../actions/assignment'

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments
    // assignments: [1, 2, 3, 4, 5, 6, 7, 8].map((a) => ({title: a}))
  }
}

const AssignmentListContainer = connect(
  mapStateToProps,
  {getAssignments: getAssignmentsRequest, push: routerActions.push}
)(AssignmentList)

export default AssignmentListContainer
