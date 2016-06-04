import React from 'react'
import UserItem from './UserItem'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)

    // console.log(this.props)
  }
  componentDidMount() {
    let token = localStorage.getItem('token')

    if (token) {
      this.props.getUsers(token)
    }
  }

  render() {
    return (
      <div>
        {(this.props.users.length > 0
            ? (
              <ul>
                {this.props.users.map(user =>
                  <UserItem
                    key={user.username}
                    {...user}
                  />
                )}
              </ul>
            )
            : <div>The user-list is empty</div>
        )}
      </div>
    )
  }

}
