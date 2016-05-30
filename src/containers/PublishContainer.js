import { connect } from 'react-redux'
import Publish from './../components/Publish/Publish'
import {addAssignment} from './../actions/assignment'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addAssignment: (title, content) => {
      dispatch(addAssignment(title, content))
    }
  }
}

const PublishContainer = connect(
  null,
  mapDispatchToProps
)(Publish)

export default PublishContainer
