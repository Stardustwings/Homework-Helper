import { connect } from 'react-redux'
import { logoutSuccess } from './../actions/user'
import { routerActions } from 'react-router-redux'
import Header from './../components/Header/Header'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      localStorage.removeItem('token')
      dispatch(logoutSuccess())
    },
    replace: (url) => dispatch(routerActions.replace(url))
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
