import { connect } from 'react-redux'
import { loginSuccess } from './../actions/user'
import App from './../components/App/App'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    autoLogin: (user) => {
      dispatch(loginSuccess(user))
    }
  }
}

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App)

export default AppContainer