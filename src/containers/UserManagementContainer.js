import { connect } from 'react-redux'
import UserManagement from './../components/UserManagement/UserManagement'
import {getUsersRequest, addUserRequest} from './../actions/user'

const mapStateToProps = (state) => {
  return {
    users: state.users // [1, 2, 3, 4, 5, 6, 7, 8].map((a) => ({username: a, type: a}))
  }
}

const UserManagementContainer = connect(
  mapStateToProps,
  {getUsers: getUsersRequest, addUser: addUserRequest}
)(UserManagement)

export default UserManagementContainer
