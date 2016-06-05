import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import Publish from './../components/Publish/Publish'
import {addAssignmentRequest} from './../actions/assignment'

const PublishContainer = connect(
  null,
  {addAssignment: addAssignmentRequest, replace: routerActions.replace}
)(Publish)

export default PublishContainer
