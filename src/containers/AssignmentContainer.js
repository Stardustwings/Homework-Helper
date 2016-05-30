import { connect } from 'react-redux'
import AssignmentList from './../components/Assignment/AssignmentList'


const mapStateToProps = (state) => {
  return {
    assignments: state.assignments
  }
}

const AssignmentContainer = connect(
  mapStateToProps
)(AssignmentList)

export default AssignmentContainer
