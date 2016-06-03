import { connect } from 'react-redux'
import AssignmentList from './../components/Assignment/AssignmentList'
import {getAssignmentsRequest} from './../actions/assignment'

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments
  }
}

const AssignmentContainer = connect(
  mapStateToProps,
  {getAssignments: getAssignmentsRequest}
)(AssignmentList)

export default AssignmentContainer
