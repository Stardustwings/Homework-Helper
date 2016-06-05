import React from 'react'
import AddUserArea from './AddUserArea'
import UserList from './UserList'

export default class UserManagement extends React.Component{
  constructor(props) {
    super(props)

    // console.log(this.props)
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '40px'
        }}
      >
        <AddUserArea addUser={this.props.addUser}/>
        <UserList
          getUsers={this.props.getUsers}
          users={this.props.users}
        />
      </div>
    )
  }
}
