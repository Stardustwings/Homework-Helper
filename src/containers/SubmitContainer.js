import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import Submit from './../components/Submit/Submit'
import {addHomeworkRequest} from './../actions/homework'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const SubmitContainer = connect(
  mapStateToProps,
  {addHomework: addHomeworkRequest, push: routerActions.push}
)(Submit)

export default SubmitContainer
