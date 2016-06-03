import { connect } from 'react-redux'
import Publish from './../components/Publish/Publish'
import {addAssignmentRequest} from './../actions/assignment'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addAssignment: ({title, content, token}) => {
      dispatch(addAssignmentRequest({title, content, token}))
    }
  }
}

const PublishContainer = connect(
  null,
  mapDispatchToProps
)(Publish)

export default PublishContainer
