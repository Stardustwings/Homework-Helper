import { connect } from 'react-redux'
import { logoutSuccess } from './../actions/user'
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
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
