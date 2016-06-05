import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import Publish from './../components/Publish/Publish'
import {addAssignmentRequest} from './../actions/assignment'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const PublishContainer = connect(
  mapStateToProps,
  {addAssignment: addAssignmentRequest, replace: routerActions.replace}
)(Publish)

export default PublishContainer
